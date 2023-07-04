import { IBudgetMediatorState } from "./IBudgetMediatorState";
import { BudgetMediator } from "./BudgetMediator";

export class AdjustedBudgetDaysLoadedState implements IBudgetMediatorState {
  private _budgetMediator: BudgetMediator;

  constructor(budgetMediator: BudgetMediator) {
    this._budgetMediator = budgetMediator;
    this._budgetMediator.setBeginningRunningTotalDay();
    this._budgetMediator.mapAdjustedBudgetDays();
    //this._budgetMediator.calculateRunningTotals();
    this._budgetMediator.setCurrentMonthBudget();
  }
}
