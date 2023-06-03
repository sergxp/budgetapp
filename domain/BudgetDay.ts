import { RunningTotal } from "./RunningTotal";
import { Transactions } from "./Transactions";

export class BudgetDay {
  public id: string;
  public day: Date;
  public transactions: Transactions;
  public runningTotal: RunningTotal;
  public userId: number;

  constructor(
    $id: string,
    $day: Date,
    $userId: number,
    $transactions?: Transactions,
    $runningTotal?: RunningTotal
  ) {
    this.id = $id;
    this.day = $day;
    this.transactions = $transactions ?? new Transactions();
    this.runningTotal = $runningTotal ?? new RunningTotal();
    this.userId = $userId;
  }
}
