import { RunningTotal } from "./RunningTotal";
import { Transactions } from "./Transactions";

export class BudgetDay {
  constructor(
    public date: Date,
    public transactions: Transactions = new Transactions(),
    public runningTotal: RunningTotal = new RunningTotal()
  ) {}
}
