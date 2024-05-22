import Joi from "joi";

const userNameValidationSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    .required()
    .max(20)
    .regex(/^[A-Z][a-zA-Z]*$/, { name: "capitalize" })
    .messages({
      "string.base": "First Name must be a string",
      "string.empty": "First Name is required",
      "string.max": "First Name cannot be more than 20 characters",
      "string.pattern.base": "First Name must start with a capital letter",
    }),
  middleName: Joi.string().trim(),
  lastName: Joi.string()
    .trim()
    .required()
    .regex(/^[a-zA-Z]+$/)
    .messages({
      "string.base": "Last Name must be a string",
      "string.empty": "Last Name is required",
      "string.pattern.base":
        "Last Name must contain only alphabetic characters",
    }),
});

const guardianValidationSchema = Joi.object({
  fatherName: Joi.string().trim().required(),
  fatherOccupation: Joi.string().trim().required(),
  fatherPhoneNo: Joi.string().trim().required(),
  motherName: Joi.string().trim().required(),
  motherOccupation: Joi.string().trim().required(),
  motherPhoneNo: Joi.string().trim().required(),
});

const localGuardianValidationSchema = Joi.object({
  name: Joi.string().trim().required(),
  occupation: Joi.string().trim().required(),
  phoneNo: Joi.string().trim().required(),
  address: Joi.string().trim().required(),
});

const studentValidationSchema = Joi.object({
  id: Joi.string().trim().required(),
  name: userNameValidationSchema.required(),
  gender: Joi.string().valid("male", "female").required(),
  dateOfBirth: Joi.string().required(),
  email: Joi.string().trim().email().required(),
  phoneNo: Joi.string().trim().required().max(11),
  emergencyPhoneNo: Joi.string().trim().required(),
  bloodGroup: Joi.string()
    .valid("A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-")
    .required(),
  presentAddress: Joi.string().trim().required(),
  permanentAddress: Joi.string().trim().required(),
  guardian: guardianValidationSchema.required(),
  localGuardian: localGuardianValidationSchema.required(),
  profileImg: Joi.string().trim(),
  isActive: Joi.string().valid("active", "blocked").default("active"),
});

export default studentValidationSchema;
