import prisma from "../../../lib/prisma";

export default async function handle(req, res) {
    const { infinitive, translation, pronunciation } = req.body;
    const result = await prisma.verb.create({
        data: {
            infinitive: infinitive,
            translation: translation,
            pronunciation: pronunciation
        },
    });
    res.json(result);
}