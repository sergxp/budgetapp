import moment from "moment";
import { prisma } from "../infrastructure/db/client";

export class Repository {
  async getBudgetMonth(month: number) {
    const currentDate = moment();
    const firstOfMonth = new Date(currentDate.year(), month, 1);
    const result = await prisma.budgetDay.findMany({
      where: {
        day: {
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
}
