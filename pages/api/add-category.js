import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handle(req, res) {
    const { category } = req.body;
    const result = await prisma.categories.create({
        data: {
            category,
        },
    });
    res.json(result);
}