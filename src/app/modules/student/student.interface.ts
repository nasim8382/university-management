import { Model, Types } from "mongoose";

export type TUserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type TGuardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherPhoneNo: string;
  motherName: string;
  motherOccupation: string;
  motherPhoneNo: string;
};

export type TLocalGuardian = {
  name: string;
  occupation: string;
  phoneNo: string;
  address: string;
};

export type TStudent = {
  id: string;
  user: Types.ObjectId;
  name: TUserName;
  gender: "male" | "female" | "other";
  dateOfBirth?: Date;
  email: string;
  phoneNo: string;
  emergencyPhoneNo: string;
  bloodGroup?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  presentAddress: string;
  permanentAddress: string;
  guardian: TGuardian;
  localGuardian: TLocalGuardian;
  profileImg?: string;
  isDeleted: boolean;
};

// for instance method
// export type StudentMethods = {
//   isStudentExits(id: string): Promise<TStudent | null>;
// };

// export type StudentModel = Model<Student, {}, StudentMethods>;
// export type StudentModel = Model<
//   TStudent,
//   Record<string, never>,
//   StudentMethods
// >;

// for static method

export interface StudentModel extends Model<TStudent> {
  isStudentExits(id: string): Promise<TStudent | null>;
}
