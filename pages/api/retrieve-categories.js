import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handle(req, res) {
    const data = await prisma.categories.findMany();
    res.json(data);
};