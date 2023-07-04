import { AutoMap } from "@automapper/classes";
import { RunningTotal } from "./RunningTotal";
import { Transactions } from "./Transactions";

export class BudgetDay {
  @AutoMap()
  public date: Date;
  @AutoMap()
  public transactions?: Transactions;
  @AutoMap()
  public runningTotal: RunningTotal;
  @AutoMap()
  public userId: number;

  constructor(
    $date: Date,
    $userId: number,
    $transactions?: Transactions,
    $runningTotal?: RunningTotal
  ) {
    this.date = $date;
    this.transactions = $transactions ?? new Transactions();
    this.runningTotal = $runningTotal ?? new RunningTotal();
    this.userId = $userId;
  }
}
