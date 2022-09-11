import { scrapeCABData } from './CABScraping';
import { RoomAllocation, Semester } from '@vacant-at-brown/interfaces';

function getCurrentSemester(): Semester {
  return new Date().getMonth() > 6 ? 'fall' : 'spring';
}

export const scrapingSources: Record<string, () => Promise<RoomAllocation[]>> =
  {
    CAB: () => scrapeCABData(getCurrentSemester(), new Date().getFullYear()),
  };

export async function scrapeAllData(): Promise<RoomAllocation[]> {
  const promises = Object.values(scrapingSources).map((source) => source());
  const allocations = await Promise.all(promises);
  return allocations.flatMap((i) => i);
}

export type ScrapingSource = keyof typeof scrapingSources;
