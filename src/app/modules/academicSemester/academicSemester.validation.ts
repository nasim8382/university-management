import { z } from "zod";

const createAcademicSemesterSchemaValidator = z.object({
  body: z.object({}),
});

export const AcademicSemesterValidations = {
  createAcademicSemesterSchemaValidator,
};
