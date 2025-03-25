"use server";

import { signIn } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export const auth = async (formData: FormData) => {
  try {
    await signIn("credentials", {
      ...Object.fromEntries(formData),
      redirect: false,
    });

    revalidatePath("/");
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
