export interface CABMeetingTime {
  meet_day: number;
  start_time: number;
  end_time: number;
}

export interface CABCourse {
  crn: string;
  code: string;
  title: string;
  meets: string;
  start_date: Date;
  end_date: Date;
  meetingTimes: CABMeetingTime[];
}

export interface DetailedCABCourse extends CABCourse {
  location?: string;
  instructor?: string;
}

export interface RawDetailedCABCourse {
  meeting_html: string;
  instructordetail_html: string;
}

export interface RawCABCourse {
  crn: string;
  code: string;
  title: string;
  meets: string;
  start_date: string;
  end_date: string;
  meetingTimes: string;
}

export interface CABCoursesResult {
  srcdb: string;
  count: number;
  results: RawCABCourse[];
}
