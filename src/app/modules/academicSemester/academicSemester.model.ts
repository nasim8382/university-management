import { Schema, model } from "mongoose";
import { TAcademicSemester, TMonths } from "./academicSemester.interface";

const months: TMonths[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const academicSemesterSchema = new Schema<TAcademicSemester>({
  name: {
    type: String,
    enum: ["Autumn", "Summer", "Fall"],
    message: "Name is required",
  },
  code: {
    type: String,
    enum: ["01", "02", "03"],
    message: "Code is required",
  },
  year: {
    type: Date,
    required: [true, "Year is required"],
  },
  startMonth: {
    type: String,
    enum: months,
  },
  endMonth: {
    type: String,
    enum: months,
  },
});

export const AcademicSemester = model<TAcademicSemester>(
  "AcademicSemester",
  academicSemesterSchema
);
