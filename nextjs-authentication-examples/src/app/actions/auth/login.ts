"use server";

import { signIn } from "@/lib/auth";

export const login = async (formData: FormData) => {
  try {
    await signIn("credentials", {
      ...Object.fromEntries(formData),
      redirect: false,
    });
    return {
      ok: true,
      message: "Login successful",
    };
  } catch (error) {
    return {
      ok: false,
      message: (error as Error).message,
    };
  }
};
