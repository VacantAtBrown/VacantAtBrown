import {
  RoomAllocation,
  RoomBlock,
  RoomEvents,
  TimeInterval,
} from '@vacant-at-brown/interfaces';

function createFreeIntervals(nonFreeIntervals: TimeInterval[]): TimeInterval[] {
  if (nonFreeIntervals.length === 0) {
    return [{ startTime: 0, endTime: 1439 }];
  }

  let mergedIntervals: TimeInterval[] = [nonFreeIntervals[0]];

  for (let i = 1; i < nonFreeIntervals.length; i++) {
    let currMergedInterval: TimeInterval =
      mergedIntervals[mergedIntervals.length - 1];
    if (
      nonFreeIntervals[i].startTime >= currMergedInterval.startTime &&
      nonFreeIntervals[i].startTime <= currMergedInterval.endTime
    ) {
      mergedIntervals.pop();
      mergedIntervals.push({
        startTime: Math.min(
          nonFreeIntervals[i].startTime,
          currMergedInterval.startTime
        ),
        endTime: Math.max(
          nonFreeIntervals[i].endTime,
          currMergedInterval.endTime
        ),
      });
    } else {
      mergedIntervals.push(nonFreeIntervals[i]);
    }
  }

  let freeIntervals: TimeInterval[] = [];

  // Handle first interval separately
  if (mergedIntervals[0].startTime > 0) {
    freeIntervals.push({
      startTime: 0,
      endTime: mergedIntervals[0].startTime,
    });
  }

  for (let i = 0; i < mergedIntervals.length - 1; i++) {
    let firstInterval: TimeInterval = mergedIntervals[i];
    let secondInterval: TimeInterval = mergedIntervals[i + 1];

    freeIntervals.push({
      startTime: firstInterval.endTime,
      endTime: secondInterval.startTime,
    });
  }

  // Handle last interval separately
  if (mergedIntervals[mergedIntervals.length - 1].startTime < 1439) {
    freeIntervals.push({
      startTime: mergedIntervals[mergedIntervals.length - 1].startTime,
      endTime: 1439,
    });
  }

  return freeIntervals;
}

export function convertRoomAllocationsToRoomBlock(
  allocations: RoomAllocation[],
  room: string,
  date: Date
): RoomBlock {
  const correctRoomAllocations: RoomAllocation[] = allocations.filter(
    (allocation) => {
      let correctDate: boolean;

      if (allocation.repeats) {
        correctDate = date.getDay() === allocation.day;
      } else {
        correctDate = date.getTime() === allocation.startDate.getTime();
      }

      return correctDate && allocation.room == room;
    }
  );

  const events: RoomEvents[] = correctRoomAllocations.map((allocation) => ({
    startTime: allocation.startTime,
    endTime: allocation.endTime,
    name: allocation.name,
    date: date,
  }));

  events.sort((roomEvent1, roomEvent2) => {
    return roomEvent1.startTime - roomEvent2.startTime;
  });
  const freeIntervals: TimeInterval[] = createFreeIntervals(events);

  return {
    freeTimes: freeIntervals,
    events: events,
  };
}
