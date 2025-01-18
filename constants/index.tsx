import homePageCourseData from '../components/Features/homePageCourseData';
import metorLedCourseData from '../components/Features/metorLedCourseData';
import preRegistrationData from '../components/Features/preRegistrationData';
import professionalCourseData from '../components/Features/professionalCourseData';
import proPicksData from '../components/Features/proPicksData';
import selfPacedCourseData from '../components/Features/selfPacedCourseData';
import { CourseData } from '../types/feature';

export const totalCourse: CourseData[] = [
  ...homePageCourseData,
  ...selfPacedCourseData,
  ...metorLedCourseData,
  ...professionalCourseData,
  ...proPicksData,
  ...preRegistrationData
];