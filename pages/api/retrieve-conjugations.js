import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export default async function handle(req, res) {
    const query = req.params.verb;
    const record = await prisma.conjugations.findMany(
        { where: { verb: query } 
    });
    res.json(record);
}