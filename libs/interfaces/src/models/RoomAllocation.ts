export type RoomAllocationType = 'Course' | 'Other';

export enum DayOfWeek {
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
}

export type Building = 'CIT' | 'Barus & Holley';

export interface Location {
  building: Building;
  room: string;
}

export interface RoomAllocation {
  startTime: number;
  endTime: number;
  day: DayOfWeek;
  type: RoomAllocationType;
  repeats?: {
    startDate: Date;
    endDate: Date;
  };
  location: Location;
}
