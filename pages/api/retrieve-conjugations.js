import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export default async function handle(req, res) {
    const { verb } = req.body;
    const record = await prisma.conjugations.findUnique({ where: { verb: parseInt( verb ) } });

    return record.id;
}