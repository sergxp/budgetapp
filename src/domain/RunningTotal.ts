import { BudgetDay } from "./BudgetDay";

export class RunningTotal {
  constructor(public amount: number = 0, public userDefined: boolean = false) {}

  public calculateRunningTotal(budgetDay: BudgetDay, prevRunningTotal: number) {
    if(this.userDefined) return;

    this.amount = prevRunningTotal + budgetDay.transactions.total;
  }
}
