import { z } from "zod";

const userSchemaValidator = z.object({
  password: z
    .string({
      invalid_type_error: "Password must be string",
    })
    .min(8, { message: "Password must be 8 or more characters long" })
    .max(20, { message: "Password can not be more than 20 characters" })
    .optional(),
});

export default userSchemaValidator;
