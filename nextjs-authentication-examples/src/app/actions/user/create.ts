"use server";

import { prisma } from "@/lib/prisma";
import { User } from "@prisma/client";

export const create = async (user: User) => {
  await prisma.user.create({ data: user });
};
