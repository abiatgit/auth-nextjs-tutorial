import { z } from "zod";
const userschema = z.object({
  email: z.string().email(),
  password: z.string().min(2),
});

export { userschema };
