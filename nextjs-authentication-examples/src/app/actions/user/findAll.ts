"use server";

import { prisma } from "@/lib/prisma";

export const findAllUsers = async () => {
  const users = await prisma.user.findMany();
  return users;
};
