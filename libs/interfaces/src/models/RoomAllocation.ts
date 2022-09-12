import { Building } from './Building';

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

export interface RoomAllocation {
  name: string;
  startTime: number;
  endTime: number;
  day: DayOfWeek;
  type: RoomAllocationType;
  startDate: Date;
  endDate: Date;
  repeats: boolean;
  building: Building; // Building name, ex. CIT
  room: string; // Room and building name, ex. CIT 168
}
