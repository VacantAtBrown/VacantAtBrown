import { Semester } from '@vacant-at-brown/interfaces';
import {
  getCoursesForSemester,
  getDetailedCourseData,
} from '@vacant-at-brown/scraping';

(async () => {
  const semester: Semester = 'fall';
  const year = 2022;
  const courses = await getCoursesForSemester(semester, year);
  const detailedCourses = await getDetailedCourseData(semester, year, courses);
  console.log(detailedCourses);
})().then(async (r) => {});

console.log('Hello World!');
