import moment from "moment";
import { prisma } from "../infrastructure/db/client";
import { BudgetDay } from "../domain/BudgetDay";
import { BudgetDayDto } from "./models/budgetDayDto";

export class Repository {
  async getBudgetMonth(month: number) {
    const currentDate = moment();
    const firstOfMonth = new Date(currentDate.year(), month, 1);
    const result = await prisma.budgetDay.findMany({
      where: {
        date: {
          gte: firstOfMonth,
          lte: moment(firstOfMonth).endOf("month").toDate(),
        },
      },
      include: {
        recurringTransactions: true,
      },
    });
    return result;
  }

  async upsertBudgetDay(budgetDay: BudgetDayDto) {
    {
      const result = await prisma.budgetDay.upsert({
        where: {
          id: budgetDay.id,
        },
        create: {
          date: budgetDay.date,
          runningTotal: budgetDay.runningTotal,
          userId: budgetDay.userId,
        },
        update: {
          date: budgetDay.date,
          runningTotal: budgetDay.runningTotal,
          userId: budgetDay.userId,
        },
      });
      return result;
    }
  }

  async getBudgetByUserId(userId: number) {
    const result = await prisma.budgetDay.findMany({
      where: {
        userId: userId,
      },
      include: {
        recurringTransactions: true,
      },
    });
    return result;
  }
}
