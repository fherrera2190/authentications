import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FormLogin } from "./ui/FormLogin";
import { login } from "@/app/actions/auth/login";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center mt-16">
      <div className="w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h1 className="text-xl text-center font-bold text-gray-900 md:text-2xl dark:text-white">
          Login
        </h1>
        <FormLogin />
        <div className="grid grid-cols-2 gap-2 my-4">
          <button
            type="button"
            onClick={async () => {
              "use server";
              const resp = await login("google");
              if (resp.ok) redirect("/");

              redirect("/auth/login");
            }}
            className="w-full text-gray-900 bg-white-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-50 dark:hover:bg-blue-200 dark:focus:ring-blue-800 flex items-center justify-center gap-5"
          >
            <FcGoogle className="text-2xl" />
            <span>Google</span>
          </button>
          <button
            type="button"
            onClick={async () => {
              "use server";
              const resp = await login("github");
              if (resp.ok) redirect("/");
            }}
            className="w-full text-gray-900 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-50 dark:hover:bg-blue-200 dark:focus:ring-blue-800 flex items-center justify-center gap-5"
          >
            <FaGithub className="text-2xl" />
            <span>Github</span>
          </button>
        </div>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
          Not registered?{" "}
          <Link
            href="/auth/register"
            className="text-blue-700 hover:underline dark:text-blue-500"
          >
            Register here
          </Link>
        </div>
      </div>
    </div>
  );
}
