import prisma from "../../../lib/prisma";

export default async function handle(req, res) {
    const { category, word, translation, gender, image, pronunciation } = req.body;
    const result = await prisma.vocabulary.create({
        data: {
            category: category,
            word: word,
            translation: translation,
            gender: gender,
            image: image,
            pronunciation: pronunciation
        },
    });
    res.json(result);
}