import { z } from "zod";

const createAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: "Academic faculty must be string",
    }),
  }),
});

export const AcademicDepartmentValidations = {
  createAcademicDepartmentValidationSchema,
};
