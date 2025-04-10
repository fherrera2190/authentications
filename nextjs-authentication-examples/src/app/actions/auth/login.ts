"use server";

import { signIn } from "@/lib/auth";

export const login = async (provider: string, formData?: FormData) => {
  let options = {
    redirect: false,
  };

  if (formData) {
    options = {
      ...options,
    };
  }

  try {
    await signIn(provider, options);

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
