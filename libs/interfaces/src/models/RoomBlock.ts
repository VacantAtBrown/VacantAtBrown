export interface TimeInterval {
  startTime: number;
  endTime: number;
}

export interface RoomEvents {
  startTime: number;
  endTime: number;
  name: string;
  date: Date;
}

export interface RoomBlock {
  freeTimes: TimeInterval[];
  events: RoomEvents[];
}
