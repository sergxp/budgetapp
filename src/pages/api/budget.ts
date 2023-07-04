import { NextApiRequest, NextApiResponse } from "next";
import { Repository } from "../../../application/repository";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const repo = new Repository();
  if (req.method === "GET") {
    const result = await repo.getBudgetByUserId(1);
    res.status(200).json(result);
  }
};

export default handler;
