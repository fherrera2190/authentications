"use client";

import { signIn } from "next-auth/react";
import React from "react";

export const SignIn = () => {
  return (
    <form>
      <button
        className="border p-2 rounded-xl hover:bg-gray-200 hover:text-black"
        onClick={() => signIn()}
        type="button"
      >
        Login
      </button>
    </form>
  );
};
