import express from "express";
import { offeredCourseServices } from "./offeredCourse.service";
import validateRequest from "../../middlewares/validateRequest";
import { offeredCourseValidations } from "./offeredCourse.validation";

const router = express.Router();

router.post(
  "/",
  validateRequest(offeredCourseValidations.createOfferedCourseValidationSchema),
  offeredCourseServices.createOfferedCourseIntoDB
);

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
