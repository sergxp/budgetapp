import { AutoMap } from "@automapper/classes";

export class BudgetDayDto {
  @AutoMap()
  id: string;

  @AutoMap()
  date: Date;

  @AutoMap()
  runningTotal: number;

  @AutoMap()
  recurringTransactions?: RecurringTransactionDto[];

  @AutoMap()
  userId: number;
}

export class RecurringTransactionDto {
  id: string;

  amount: number;

  name: string;

  budgetDayId: string | null;
}
