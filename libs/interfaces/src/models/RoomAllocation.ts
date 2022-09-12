export type RoomAllocationType = 'Course' | 'Other';

export enum DayOfWeek {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

export type Building = 'CIT' | 'Barus & Holley' | 'Unknown';

export interface RoomAllocation {
  name: string;
  startTime: number;
  endTime: number;
  day: DayOfWeek;
  type: RoomAllocationType;
  startDate: Date;
  endDate: Date;
  repeats: boolean;
  building: Building; // CIT
  room: string;
}
