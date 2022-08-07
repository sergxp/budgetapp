import { BudgetDayDetail } from "../models/BudgetDayDetail";

export const getBudgetDaysData = (): BudgetDayDetail[] => [
  {
    date: new Date(2022, 8, 1),
    runningTotal: 1321,
    transactions: -301,
    recurringTransactions: ["Rent Payment", "Haircut"],
  },
  {
    date: new Date(2022, 8, 2),
    runningTotal: 1321,
    transactions: 0,
    recurringTransactions: [],
  },
  {
    date: new Date(2022, 8, 2),
    runningTotal: 1321,
    transactions: -1020,
    recurringTransactions: ["Groceries, Vacation"],
  },
  {
    date: new Date(2022, 8, 2),
    runningTotal: 1321,
    transactions: 4040,
    recurringTransactions: ["Paycheck"],
  },
  {
    date: new Date(2022, 8, 2),
    runningTotal: 1321,
    transactions: 0,
    recurringTransactions: [],
  },
  {
    date: new Date(2022, 8, 2),
    runningTotal: 1321,
    transactions: 0,
    recurringTransactions: [],
  },
];
