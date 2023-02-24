import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export default async function handle(req, res) {
    const query = req.query.verb;
    let verb = await prisma.verbs.findMany({ 
        where: { infinitive: query }, 
    });
    res.json(verb);
}