import { executeAction } from "./executeAction";
import { prisma } from "./prisma";
import { userschema } from "./useSchema";
// import bcrypt from "bcrypt";

export async function signUp(formData: FormData) {
  return executeAction({
    actionFn: async () => {
      const email = formData.get("email");
      const password = formData.get("password");

      if (!email || !password || typeof email !== "string" || typeof password !== "string") {
        throw new Error("Invalid form data");
      }

      const validateData = userschema.parse({ email, password });

      await prisma.user.create({
        data: {
          email: validateData.email,
          password: validateData.password, 
        },
      });
    },
  });
}
