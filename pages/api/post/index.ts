import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

// POST /api/post
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { question, optionA, optionB } = req.body;

  const result = await prisma.question.create({
    data: {
      question: question,
      optionA: optionA,
      optionB: optionB,
      aCount: 0,
      bCount: 0,
    },
  });
  res.json(result);
}
