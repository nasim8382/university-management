import express from "express";
import { SemesterRegistrationControllers } from "./semesterRegistration.controller";

const router = express.Router();

router.post(
  "/create-semester-registration",
  SemesterRegistrationControllers.createSemesterRegistration
);

router.get("/", SemesterRegistrationControllers.getAllSemesterRegistrations);

router.get(
  "/:semesterRegistrationId",
  SemesterRegistrationControllers.getSingleSemesterRegistration
);

router.patch(
  "/:semesterRegistrationId",
  SemesterRegistrationControllers.updateSemesterRegistration
);

export const SemesterRegistrationRoutes = router;
