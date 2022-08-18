import { BudgetDay } from "./BudgetDay";

export class MonthlyBudget {
  constructor(
    public days: BudgetDay[],
    private _prevMonthRunningTotal: number
  ) {
    this.updateRunningTotals();
  }

  updateRunningTotals() {
    this.days.forEach((day, i) => {
      if (i === 0) {
        day.runningTotal.calculateRunningTotal(
          day,
          this._prevMonthRunningTotal
        );
      }

      const prevRunningTotal = this.days[i - 1]?.runningTotal.amount ?? 0;
      day.runningTotal.calculateRunningTotal(day, prevRunningTotal);
    });
  }
}
