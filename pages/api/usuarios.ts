import { prismaClient } from "@/lib/prisma";


export default async function handler(req:any, res:any) {
  const users = await prismaClient.user.findMany({});
  res.status(200).json(users);
}
