import { TOfferedCourse } from "./offeredCourse.interface";
import { OfferedCourse } from "./offeredCourse.model";

const createOfferedCourseIntoDB = async (payload: TOfferedCourse) => {
  const result = await OfferedCourse.create(payload);

  return result;
};

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
