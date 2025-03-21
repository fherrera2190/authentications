"use client";

import { useSession } from "next-auth/react";
import React from "react";

export const UserData = () => {
  const session = useSession();

  //   console.log();

  if (session.status === "loading") {
    return <div>...loading</div>;
  }

  return <div>{JSON.stringify(session, null, 3)}</div>;
};
