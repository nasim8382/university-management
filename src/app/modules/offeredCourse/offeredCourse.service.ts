import { TOfferedCourse } from "./offeredCourse.interface";

const createOfferedCourseIntoDB = async (payload: TOfferedCourse) => {};

const getAllOfferedCoursesFromDB = async () => {};

const getSingleOfferedCourseFromDB = async () => {};

const updateOfferedCourseIntoDB = async () => {};

const deleteOfferedCourseFromDB = async () => {};

export const offeredCourseServices = {
  createOfferedCourseIntoDB,
  deleteOfferedCourseFromDB,
  updateOfferedCourseIntoDB,
  getSingleOfferedCourseFromDB,
  getAllOfferedCoursesFromDB,
};
