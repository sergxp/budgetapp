import { BudgetDay } from "../../domain/BudgetDay";
import { RunningTotal } from "../../domain/RunningTotal";
import { Transactions } from "../../domain/Transactions";

export const getBudgetDaysData = (): BudgetDay[] => [
  new BudgetDay(
    new Date(2022, 8, 1),
    new Transactions([
      { amount: -1249, name: "Rent Payment" },
      { amount: -50, name: "Haircut" },
    ]),
    new RunningTotal(3921, true)
  ),
  new BudgetDay(new Date(2022, 8, 2)),
  new BudgetDay(
    new Date(2022, 8, 3),
    new Transactions([
      { amount: -492, name: "Car Payment" },
      { amount: -80, name: "Oil Change" },
    ])
  ),
  new BudgetDay(new Date(2022, 8, 4)),
  new BudgetDay(new Date(2022, 8, 5)),
  new BudgetDay(
    new Date(2022, 8, 6),
    new Transactions([
      { amount: -149, name: "Credit Card Payment" },
      { amount: -200, name: "Fancy Dinner" },
      { amount: -14.99, name: "Hulu" },
    ])
  ),
  new BudgetDay(new Date(2022, 8, 7)),
];
