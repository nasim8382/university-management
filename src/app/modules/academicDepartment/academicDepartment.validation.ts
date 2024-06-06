import { z } from "zod";

const createAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: "Academic Department must be string",
    }),
  }),
});

export const AcademicDepartmentValidations = {
  createAcademicDepartmentValidationSchema,
};
