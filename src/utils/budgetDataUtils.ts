import { BudgetDay } from "../../domain/BudgetDay";
import { RunningTotal } from "../../domain/RunningTotal";
import { Transactions } from "../../domain/Transactions";

export const getBudgetDaysData = (): BudgetDay[] => [
  new BudgetDay(
    new Date(2022, 8, 1),
    new Transactions([
      { amount: -1249, transactionName: "Rent Payment" },
      { amount: -50, transactionName: "Haircut" },
    ]),
    new RunningTotal(3921, true)
  ),
  new BudgetDay(new Date(2022, 8, 2)),
  new BudgetDay(
    new Date(2022, 8, 3),
    new Transactions([
      { amount: -492, transactionName: "Car Payment" },
      { amount: -80, transactionName: "Oil Change" },
    ])
  ),
  new BudgetDay(new Date(2022, 8, 4)),
  new BudgetDay(new Date(2022, 8, 5)),
  new BudgetDay(
    new Date(2022, 8, 6),
    new Transactions([
      { amount: -149, transactionName: "Credit Card Payment" },
      { amount: -200, transactionName: "Fancy Dinner" },
      { amount: -14.99, transactionName: "Hulu" },
    ])
  ),
  new BudgetDay(new Date(2022, 8, 7)),
];
