import { RecurringTransaction } from "./RecurringTransaction";

export class Transactions {
  public total: number;

  constructor(public recurringTransactions: RecurringTransaction[] = []) {
    this.calculateTransactions();
  }

  public calculateTransactions() {
    this.total = this.recurringTransactions.reduce(
      (acc, t) => acc + t.amount,
      0
    );
  }

  public getTransactionNames() {
    return this.recurringTransactions.map((x) => x.transactionName);
  }
}
