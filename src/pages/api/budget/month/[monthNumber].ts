import type { NextApiRequest, NextApiResponse } from "next";
import { Repository } from "../../../../../application/repository";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const repo = new Repository();
  const { monthNumber } = req.query;
  const parsedMonth = +`${monthNumber}`;

  if (isNaN(parsedMonth)) {
    res.status(400).json("Month parameter should be a number");
  }

  const result = await repo.getBudgetMonth(parsedMonth);
  res.status(200).json(result);
};

export default handler;
