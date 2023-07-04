import { BudgetDefaultDaysLoaded } from "./DefaultBudgetDaysLoadedState";
import { IBudgetMediatorState } from "./IBudgetMediatorState";
import { BudgetMediator } from "./BudgetMediator";

export class BudgetInitState implements IBudgetMediatorState {
  private _budgetMediator: BudgetMediator;

  constructor(budgetMediator: BudgetMediator) {
    this._budgetMediator = budgetMediator;
    this._budgetMediator.calculateRunningTotals();
    this._budgetMediator.setState(
      new BudgetDefaultDaysLoaded(this._budgetMediator)
    );
  }
}
