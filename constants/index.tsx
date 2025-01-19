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

export function formatUSD(price) {
  const number = parseFloat(price); // Convert string to number
  if (isNaN(number)) {
    return 'Invalid price'; // Return an error message if the conversion fails
  }
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'INR'
  }).format(number);
}
