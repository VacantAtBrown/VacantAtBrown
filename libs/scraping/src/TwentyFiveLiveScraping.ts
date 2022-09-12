import axios, { AxiosResponse } from 'axios';
import { readFile } from 'fs';

const TWENTYFIVELIVE_LOCATION_URL =
  'https://25live.collegenet.com/25live/data/brown/run/list/listdata.json?compsubject=location&order=asc&sort=name&page=0&page_size=25000&obj_cache_accl=0&caller=pro-ListService.getData';

export async function getLocationIds() {
  const res = await readFile('apps/scraper/src/assets/locationsRaw.json');
  const json = JSON.stringify(re);
  //   const json = JSON.stringify(res);
  //   console.log(json);
}
