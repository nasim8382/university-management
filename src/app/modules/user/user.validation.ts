import { z } from "zod";

const userSchemaValidator = z.object({
  id: z.string().min(1, "Id is required"),
  password: z
    .string()
    .min(8, "Password needs more than 8 characters")
    .max(20, "Password can not be more than 20 characters"),
  needsPasswordChange: z.boolean().default(true).optional(),
  role: z.enum(["student", "faculty", "admin"]),
  status: z.enum(["in-progress", "blocked"]),
  isDeleted: z.boolean().default(false).optional(),
});

export default userSchemaValidator;
