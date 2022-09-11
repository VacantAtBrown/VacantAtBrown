import { Semester } from '@vacant-at-brown/interfaces';
import { scrapeAllData } from '@vacant-at-brown/scraping';
import { getLogger } from 'log4js';
import { writeFile } from 'fs';
const logger = getLogger('Application');

(async () => {
  logger.info('Starting to scrape data...');
  const allocations = await scrapeAllData();
  logger.info('Finished scraping data.');
  logger.info('Saving data to client...');
  writeFile(
    'apps/vacant-at-brown/src/data/allocations.json',
    JSON.stringify(allocations),
    'utf8',
    () => {
      logger.info('Finished saving data to client.');
    }
  );
})().then(async (r) => {});

console.log('Hello World!');
