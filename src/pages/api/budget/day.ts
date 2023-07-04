import { NextApiRequest, NextApiResponse } from "next";
import { Repository } from "../../../../application/repository";
import * as yup from "yup";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const repo = new Repository();

  const budgetDaySchema = yup.object({
    date: yup.date().required(),
    runningTotal: yup.number(),
    userId: yup.number().required(),
  });

  if (req.method === "POST") {
    const { body } = req;

    try {
      await budgetDaySchema.validate(body);
    } catch (e) {
      if (e instanceof yup.ValidationError) {
        return res.status(400).json(e.errors);
      }
      res.status(400).json(e);
    }

    const result = await repo.upsertBudgetDay(body);
    res.status(200).json(result);
  }
};

export default handler;
