import { z } from "zod";

// UserName Schema
const createUserNameValidationSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, "First Name is required")
    .max(20, "First Name can not be more than 20 characters")
    .refine(
      (value) => {
        const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
        return firstNameStr === value;
      },
      {
        message: "{VALUE} is not in capitalize format",
      }
    ),
  middleName: z.string().trim().optional(),
  lastName: z
    .string()
    .trim()
    .min(1, "Last Name is required")
    .refine((value) => /^[A-Za-z]+$/.test(value), {
      message: "{VALUE} is not valid",
    }),
});

// Guardian Schema
const createGuardianValidationSchema = z.object({
  fatherName: z.string().trim().min(1, "Father's Name is required"),
  fatherOccupation: z.string().trim().min(1, "Father's Occupation is required"),
  fatherPhoneNo: z.string().trim().min(1, "Father's Phone Number is required"),
  motherName: z.string().trim().min(1, "Mother's Name is required"),
  motherOccupation: z.string().trim().min(1, "Mother's Occupation is required"),
  motherPhoneNo: z.string().trim().min(1, "Mother's Phone Number is required"),
});

// Local Guardian Schema
const createLocalGuardianValidationSchema = z.object({
  name: z.string().trim().min(1, "Local Guardian's Name is required"),
  occupation: z
    .string()
    .trim()
    .min(1, "Local Guardian's Occupation is required"),
  phoneNo: z
    .string()
    .trim()
    .min(1, "Local Guardian's Phone Number is required"),
  address: z.string().trim().min(1, "Local Guardian's Address is required"),
});

// Student Schema
const createStudentValidationSchema = z.object({
  body: z.object({
    password: z
      .string()
      .trim()
      .min(8, { message: "Password must be 8 or more characters long" })
      .max(20, "Password can not be more than 20 characters"),
    student: z.object({
      name: createUserNameValidationSchema,
      gender: z.enum(["male", "female"], {
        errorMap: () => ({ message: "{VALUE} is not valid" }),
      }),
      dateOfBirth: z.string().optional(),
      email: z
        .string()
        .trim()
        .min(1, "Email is required")
        .email("{VALUE} is not a valid email"),
      contactNo: z
        .string()
        .trim()
        .min(1, "Phone number is required")
        .max(11, "Phone No can not be more than 11 characters"),
      emergencyContactNo: z
        .string()
        .trim()
        .min(1, "Emergency phone number is required"),
      bloodGroup: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"], {
        errorMap: () => ({ message: "Blood group is required" }),
      }),
      presentAddress: z.string().trim().min(1, "Present address is required"),
      permanentAddress: z
        .string()
        .trim()
        .min(1, "Permanent address is required"),
      guardian: createGuardianValidationSchema,
      localGuardian: createLocalGuardianValidationSchema,
      profileImg: z.string().trim().optional(),
      admissionSemester: z.string(),
      academicDepartment: z.string(),
    }),
  }),
});

const updateUserNameValidationSchema = z.object({
  firstName: z.string().min(1).max(20).optional(),
  middleName: z.string().optional(),
  lastName: z.string().optional(),
});

const updateGuardianValidationSchema = z.object({
  fatherName: z.string().optional(),
  fatherOccupation: z.string().optional(),
  fatherContactNo: z.string().optional(),
  motherName: z.string().optional(),
  motherOccupation: z.string().optional(),
  motherContactNo: z.string().optional(),
});

const updateLocalGuardianValidationSchema = z.object({
  name: z.string().optional(),
  occupation: z.string().optional(),
  contactNo: z.string().optional(),
  address: z.string().optional(),
});

export const updateStudentValidationSchema = z.object({
  body: z.object({
    student: z.object({
      name: updateUserNameValidationSchema,
      gender: z.enum(["male", "female", "other"]).optional(),
      dateOfBirth: z.string().optional(),
      email: z.string().email().optional(),
      contactNo: z.string().optional(),
      emergencyContactNo: z.string().optional(),
      bloodGroup: z
        .enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"])
        .optional(),
      presentAddress: z.string().optional(),
      permanentAddress: z.string().optional(),
      guardian: updateGuardianValidationSchema.optional(),
      localGuardian: updateLocalGuardianValidationSchema.optional(),
      admissionSemester: z.string().optional(),
      profileImg: z.string().optional(),
      academicDepartment: z.string().optional(),
    }),
  }),
});

export const studentValidations = {
  createStudentValidationSchema,
  updateStudentValidationSchema,
};
