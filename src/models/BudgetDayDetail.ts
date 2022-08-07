export class BudgetDayDetail {
  public date: Date;
  public runningTotal: number;
  public transactions: number;
  public recurringTransactions: string[];

  constructor(
    $date: Date,
    $runningTotal: number,
    $transactions: number,
    $recurringTransactions: string[]
  ) {
    this.date = $date;
    this.runningTotal = $runningTotal;
    this.transactions = $transactions;
    this.recurringTransactions = $recurringTransactions;
  }
}
