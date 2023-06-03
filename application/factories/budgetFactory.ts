import { BudgetDay } from "../../domain/BudgetDay";
import { RecurringTransaction } from "../../domain/RecurringTransaction";
import { RunningTotal } from "../../domain/RunningTotal";
import { Transactions } from "../../domain/Transactions";
import { BudgetDayDto } from "../models/budgetDayDto";

export const createBudgetDay = (dto: BudgetDayDto) =>
  new BudgetDay(
    dto.id,
    new Date(dto.day),
    dto.userId,
    new Transactions(
      dto.recurringTransactions.map(
        (x) => new RecurringTransaction(+x.amount, x.name)
      )
    ),
    new RunningTotal(dto.runningTotal)
  );

export const createBudgetDayCollection = (dto: BudgetDayDto[]) =>
  dto.map((x) => createBudgetDay(x));
