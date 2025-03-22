"use client";

import { FcGoogle } from "react-icons/fc";

export const ButtonGoogle = () => {
  return (
    <button
      type="button"
      className="w-full text-gray-900 bg-white-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-50 dark:hover:bg-blue-200 dark:focus:ring-blue-800 flex items-center justify-center gap-5"
    >
      <FcGoogle className="text-2xl" />
      <span>Google</span>
    </button>
  );
};
