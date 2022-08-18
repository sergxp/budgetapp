// src/pages/api/examples.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../infrastructure/db/client";
import { Prisma } from "@prisma/client";

const load = async () => {
  const budgetDays: Prisma.BudgetDayCreateManyInput[] = [];
  let startDate = new Date();
  startDate.setHours(0);
  startDate.setMinutes(0);
  startDate.setSeconds(0);
  startDate.setSeconds(0);
  startDate.setMilliseconds(0);

  for (let i = 0; i < 1000; i++) {
    budgetDays.push({
      day: new Date(startDate),
      userId: 1,
    });

    startDate.setDate(startDate.getDate() + 1);
  }
  await prisma.budgetDay.createMany({ data: budgetDays });
  console.log(budgetDays);
};

const loadDb = async (req: NextApiRequest, res: NextApiResponse) => {
  //await load();
  res.status(200).json("done");
};

export default loadDb;
