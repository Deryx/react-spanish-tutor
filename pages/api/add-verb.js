import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handle(req, res) {
    const { infinitive, translation, pronunciation } = req.body;
    const result = await prisma.verbs.create({
        data: {
            infinitive: infinitive,
            translation: translation,
            pronunciation: pronunciation
        },
    });
    res.json(result);
}