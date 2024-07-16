import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { CourseValidations } from "./course.validation";
import { CourseControllers } from "./course.controller";

const router = express.Router();

router.post(
  "/create-course",
  validateRequest(CourseValidations.createCourseValidationSchema),
  CourseControllers.createCourse
);

router.get("/", CourseControllers.getAllCourses);

router.get("/:courseId", CourseControllers.getSingleCourse);

router.patch(
  "/:courseId",
  validateRequest(CourseValidations.updateCourseValidationSchema),
  CourseControllers.updateCourse
);

router.delete("/:courseId", CourseControllers.deleteCourse);

router.put("/:courseId/assign-faculties", CourseControllers.assignFaculties);

export const CourseRoutes = router;
