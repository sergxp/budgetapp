import { BudgetDay } from "../../domain/BudgetDay";
import { RunningTotal } from "../../domain/RunningTotal";
import { Transactions } from "../../domain/Transactions";

export class BudgetDayDto {
  id: string;
  day: Date;
  runningTotal: number;
  recurringTransactions: RecurringTransactions[];
  userId: number;
  //   toDomainModel(): BudgetDay {
  //     return new BudgetDay(
  //       this.day,
  //       new Transactions(this.recurringTransactions),
  //       new RunningTotal(this.runningTotal)
  //     );
  //   }
  constructor(json: any) {
    this.id = json.id;
    this.day = json.day;
    this.runningTotal = json.runningTotal;
    this.recurringTransactions = json.recurringTransactions;
    this.userId = json.userId;
  }
}

interface RecurringTransactions {
  id: string;
  amount: number;
  name: string;
  budgetDayId: string | null;
}
