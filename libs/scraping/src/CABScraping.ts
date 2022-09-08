import {
  CABCourse,
  CABCoursesResult,
  DetailedCABCourse,
  RawDetailedCABCourse,
  Semester,
} from '@vacant-at-brown/interfaces';
import axios, { AxiosResponse } from 'axios';

const CAB_SEARCH_URL = 'https://cab.brown.edu/api/?page=fose&route=search';

const semesterToNumber: Record<Semester, string> = {
  summer: '00',
  fall: '10',
  winter: '15',
  spring: '20',
};

export async function getCoursesForSemester(
  semester: Semester,
  year: number
): Promise<CABCourse[]> {
  const requestData = {
    other: {
      srcdb: year.toString() + semesterToNumber[semester],
    },
    criteria: [
      { field: 'is_ind_study', value: 'N' },
      { field: 'is_canc', value: 'N' },
    ],
  };

  const result: AxiosResponse<CABCoursesResult> = await axios.post(
    CAB_SEARCH_URL,
    requestData
  );

  return result.data.results.map((result) => {
    const meetingTimes = JSON.parse(result.meetingTimes);

    return {
      ...result,
      start_date: new Date(result.start_date),
      end_date: new Date(result.end_date),
      meetingTimes: meetingTimes.map(
        (meet: { start_time: string; end_time: string; meet_day: string }) => ({
          start_time: parseInt(meet.start_time),
          end_time: parseInt(meet.end_time),
          meet_day: parseInt(meet.meet_day),
        })
      ),
    };
  });
}

const CAB_DETAIL_URL = 'https://cab.brown.edu/api/?page=fose&route=details';

export async function getDetailedCourseData(
  semester: Semester,
  year: number,
  courses: CABCourse[]
): Promise<DetailedCABCourse[]> {
  const srcdb = year.toString() + semesterToNumber[semester];

  async function queryCourseData(
    course: CABCourse
  ): Promise<DetailedCABCourse> {
    const requestData = {
      srcdb,
      key: `crn:${course.crn}`,
    };

    const result: AxiosResponse<RawDetailedCABCourse> = await axios.post(
      CAB_DETAIL_URL,
      requestData
    );

    const detailResult = result.data;
    const location = detailResult.meeting_html
      .match('<a.*>([ws-]+)</a>')
      ?.find((t) => true);
    const instructor = detailResult.instructordetail_html
      .match('<h4><a.*>([ws-]+)</a></h4>')
      ?.find((t) => true);
    return {
      ...course,
      location: location,
      instructor: instructor,
    };
  }

  return await Promise.all(courses.map(queryCourseData));
}

export function convertCoursesToRoomAllocations(courses: DetailedCABCourse[]) {
  return courses
    .map((course) => {
      // Ignore if no location was found
      if (!course.location) return;

      console.log('location', course.location);
    })
    .filter((c) => c !== undefined);
}
