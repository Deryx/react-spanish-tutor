import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handle(req, res) {
    const query = req.query.category;
    let category = await prisma.categories.findMany({ 
        where: { category: query }, 
    });
    res.json(category);
}