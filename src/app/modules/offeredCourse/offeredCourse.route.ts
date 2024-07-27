import express from "express";
import { offeredCourseServices } from "./offeredCourse.service";

const router = express.Router();

router.post("/", offeredCourseServices.createOfferedCourseIntoDB);

router.get("/", offeredCourseServices.getAllOfferedCoursesFromDB);

router.get(
  "/:offeredCourseId",
  offeredCourseServices.getSingleOfferedCourseFromDB
);

router.patch(
  "/:offeredCourseId",
  offeredCourseServices.updateOfferedCourseIntoDB
);

router.delete(
  "/:offeredCourseId",
  offeredCourseServices.deleteOfferedCourseFromDB
);

export const offeredCourseRoutes = router;
