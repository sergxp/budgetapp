import { IBudgetMediatorState } from "./IBudgetMediatorState";
import { BudgetMediator } from "./BudgetMediator";

export class BudgetDefaultDaysLoaded implements IBudgetMediatorState {
  private _budgetMediator: BudgetMediator;

  constructor(budgetMediator: BudgetMediator) {
    this._budgetMediator = budgetMediator;
    this._budgetMediator.setCurrentMonthBudget();
  }
}
