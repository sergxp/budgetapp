import { BudgetDay } from "./BudgetDay";

export class RunningTotal {
  public userDefined: boolean = false;
  public amount: number = 0;
  constructor($amount?: number) {
    if ($amount) {
      this.userDefined = true;
      this.amount = $amount;
    }
  }

  public calculateRunningTotal(budgetDay: BudgetDay, prevRunningTotal: number) {
    if (this.userDefined) return;

    this.amount = prevRunningTotal + budgetDay.transactions.total;
  }
}
