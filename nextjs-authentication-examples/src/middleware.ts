import { NextRequest } from "next/server";
import { auth } from "./lib/auth";

// export { auth } from "@/lib/auth";
// console.log(process.env)

export default function middleware(req: NextRequest) {
  console.log("nemesis");
  auth(req);
}
