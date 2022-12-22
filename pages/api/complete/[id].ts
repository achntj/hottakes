import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

// PUT /api/complete/:id
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const postId = req.query.id;
  const optionA = req.body.a;

  let post;

  if (optionA) {
    post = await prisma.question.update({
      where: { id: Number(postId) },
      data: {
        aCount: req.body.count + 1,
      },
    });
  } else {
    post = await prisma.question.update({
      where: { id: Number(postId) },
      data: {
        bCount: req.body.count + 1,
      },
    });
  }

  res.json(post);
}
