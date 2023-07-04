import { BudgetDay } from "./BudgetDay";

export class RunningTotal {
  private _isAdjusted: boolean = false;
  private _amount: number = 0;
  constructor($amount?: number, $isAdjusted?: boolean) {
    if ($amount) {
      this._amount = $amount;
    }
    if ($isAdjusted) {
      this._isAdjusted = $isAdjusted;
    }
  }

  public calculateRunningTotal(budgetDay: BudgetDay, prevRunningTotal: number) {
    if (this._isAdjusted) return;

    this._amount = prevRunningTotal + (budgetDay.transactions?.total ?? 0);
  }

  public adjustRunningTotal(amount: number) {
    this._amount += amount;
    this._isAdjusted = true;
  }

  public get isAdjusted(): boolean {
    return this._isAdjusted;
  }

  public setIsAdjusted(isAdjusted: boolean) {
    this._isAdjusted = isAdjusted;
  }

  public get amount(): number {
    return this._amount;
  }
}
