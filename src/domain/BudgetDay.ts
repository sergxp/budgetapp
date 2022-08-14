import { RunningTotal } from "./RunningTotal";
import { TransactionContainer } from "./TransactionContainer";

export class BudgetDay {
  

  constructor(
    public date: Date, 
    public transactions: TransactionContainer = new TransactionContainer(),
    public runningTotal: RunningTotal = new RunningTotal()) {}
}
