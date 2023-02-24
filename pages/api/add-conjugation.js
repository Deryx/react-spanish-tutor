import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handle(req, res) {
    const { verb, tense, yo, tu, el, nosotros, vosotros, ellos } = req.body;
    const result = await prisma.conjugations.create({
        data: {
            verb: verb,
            tense: tense,
            yo: yo,
            tu: tu,
            el: el,
            nosotros: nosotros,
            vosotros: vosotros,
            ellos: ellos
        },
    });
    res.json(result);
}