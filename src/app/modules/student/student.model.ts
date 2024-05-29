import { Schema, model } from "mongoose";
// import validator from "validator";
import {
  StudentModel,
  TGuardian,
  TLocalGuardian,
  TStudent,
  TUserName,
} from "./student.interface";

const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    // required: [true, "First Name is required"],
    // trim: true,
    // maxlength: [20, "First Name can not be more than 20 characters"],
    // validate: {
    //   validator: function (value: string) {
    //     const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
    //     return firstNameStr === value;
    //   },
    //   message: "{VALUE} is not in capitalize format",
    // },
  },
  middleName: {
    type: String,
    // trim: true,
  },
  lastName: {
    type: String,
    // required: [true, "Last Name is required"],
    // trim: true,
    // validate: {
    //   validator: (value: string) => validator.isAlpha(value),
    //   message: "{VALUE} is not valid",
    // },
  },
});

const guardianSchema = new Schema<TGuardian>({
  fatherName: {
    type: String,
    // required: [true, "Father's Name is required"],
    // trim: true,
  },
  fatherOccupation: {
    type: String,
    // required: [true, "Father's Occupation is required"],
    // trim: true,
  },
  fatherPhoneNo: {
    type: String,
    // required: [true, "Father's Phone Number is required"],
    // trim: true,
  },
  motherName: {
    type: String,
    // required: [true, "Mother's Name is required"],
    // trim: true,
  },
  motherOccupation: {
    type: String,
    // required: [true, "Mother's Occupation is required"],
    // trim: true,
  },
  motherPhoneNo: {
    type: String,
    // required: [true, "Mother's Phone Number is required"],
    // trim: true,
  },
});

const localGuardianSchema = new Schema<TLocalGuardian>({
  name: {
    type: String,
    // required: [true, "Local Guardian's Name is required"],
    // trim: true,
  },
  occupation: {
    type: String,
    // required: [true, "Local Guardian's Occupation is required"],
    // trim: true,
  },
  phoneNo: {
    type: String,
    // required: [true, "Local Guardian's Phone Number is required"],
    // trim: true,
  },
  address: {
    type: String,
    // required: [true, "Local Guardian's Address is required"],
    // trim: true,
  },
});

const studentSchema = new Schema<TStudent, StudentModel>(
  {
    id: {
      type: String,
      // required: true,
      // unique: true,
      // message: "Student ID is required",
      // trim: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      required: [true, "User Id is required"],
      unique: true,
      ref: "User",
    },
    name: {
      type: userNameSchema,
      // required: [true, "Student name is required"],
    },
    gender: {
      type: String,
      enum: {
        values: ["male", "female"],
        message: "{VALUE} is not valid",
      },
      // required: [true, "Gender is required"],
    },
    dateOfBirth: {
      type: String,
      // required: [true, "Date of birth is required"]
    },
    email: {
      type: String,
      // required: [true, "Email is required"],
      // unique: true,
      // trim: true,
      // validate: {
      //   validator: (value: string) => validator.isEmail(value),
      //   message: "{VALUE} is not a valid email",
      // },
    },
    phoneNo: {
      type: String,
      // required: [true, "Phone number is required"],
      // maxlength: [11, "Phone No can not be more than 11 characters"],
      // trim: true,
    },
    emergencyPhoneNo: {
      type: String,
      // required: [true, "Emergency phone number is required"],
      // trim: true,
    },
    bloodGroup: {
      type: String,
      enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
      // message: "Blood group is required",
    },
    presentAddress: {
      type: String,
      // required: [true, "Present address is required"],
      // trim: true,
    },
    permanentAddress: {
      type: String,
      // required: [true, "Permanent address is required"],
      // trim: true,
    },
    guardian: {
      type: guardianSchema,
      // required: [true, "Guardian information is required"],
    },
    localGuardian: {
      type: localGuardianSchema,
      // required: [true, "Local guardian information is required"],
    },
    profileImg: { type: String, trim: true },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// virtual
studentSchema.virtual("fullName").get(function () {
  return `${this.name.firstName} ${this.name.middleName} ${this.name.lastName}`;
});

// query middleware
studentSchema.pre("find", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

studentSchema.pre("findOne", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

// aggregate middleware
studentSchema.pre("aggregate", function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

// crating a custom static method
studentSchema.statics.isStudentExits = async function (id) {
  const existingStudent = await Student.findOne({ id });
  return existingStudent;
};

export const Student = model<TStudent, StudentModel>("Student", studentSchema);
