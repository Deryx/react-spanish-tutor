import prisma from "@prisma/client";

export default async function handle(req, res) {
    const { category } = req.body;
    const result = await prisma.categories.create({
        data: {
            category: category,
        },
    });
    res.json(result);
}