import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { SemesterRegistrationServices } from "./semesterRegistration.service";

const createSemesterRegistration = catchAsync(async (req, res) => {
  const result =
    await SemesterRegistrationServices.createSemesterRegistrationIntoDB(
      req.body
    );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Semester Registration is created successfully",
    data: result,
  });
});

const getAllSemesterRegistrations = catchAsync(async (req, res) => {
  const result =
    await SemesterRegistrationServices.getAllSemesterRegistrationsFromDB(
      req.query
    );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Semester Registrations are retrieved successfully",
    data: result,
  });
});

const getSingleSemesterRegistration = catchAsync(async (req, res) => {
  const { semesterRegistrationId } = req.params;

  const result =
    await SemesterRegistrationServices.getSingleSemesterRegistrationFromDB(
      semesterRegistrationId
    );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Semester Registration is retrieved successfully",
    data: result,
  });
});

const updateSemesterRegistration = catchAsync(async (req, res) => {
  const { semesterRegistrationId } = req.params;

  const result =
    await SemesterRegistrationServices.updateSemesterRegistrationIntoDB(
      semesterRegistrationId,
      req.body
    );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Semester Registration is updated successfully",
    data: result,
  });
});

const deleteSemesterRegistration = catchAsync(async (req, res) => {
  const result =
    await SemesterRegistrationServices.deleteSemesterRegistrationIntoDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Semester Registration is deleted successfully",
    data: result,
  });
});

export const SemesterRegistrationControllers = {
  createSemesterRegistration,
  getAllSemesterRegistrations,
  getSingleSemesterRegistration,
  updateSemesterRegistration,
  deleteSemesterRegistration,
};
