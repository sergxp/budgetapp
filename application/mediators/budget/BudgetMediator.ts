import { debug } from "console";
import { BudgetDay } from "../../../domain/BudgetDay";
import { Calendar, Day } from "../../../domain/Calendar";
import { AdjustedBudgetDaysLoadedState } from "./AdjustedBudgetDaysLoadedState";
import { IBudgetMediatorState } from "./IBudgetMediatorState";
import { BudgetInitState } from "./InitState";
import { makeObservable, observable } from "mobx";

export class BudgetMediator {
  private _calendar: Calendar;
  private _adjustedBudgetDays: BudgetDay[] = [];
  private _budgetDays: BudgetDay[] = [];
  private _beginningRunningTotalDay: BudgetDay | null;
  @observable private _currentCalendarBudget: BudgetDay[] = [];
  private _userId: number;
  private _state: IBudgetMediatorState;

  constructor(calendar: Calendar, userId: number) {
    makeObservable(this);

    this._calendar = calendar;
    this._userId = userId;
    this.setState(new BudgetInitState(this));
  }

  get calendar(): Calendar {
    return this._calendar;
  }

  get userId(): number {
    return this._userId;
  }

  calculateRunningTotals() {
    if (!this._beginningRunningTotalDay) {
      this._calendar.month?.days.forEach((day) => {
        this._budgetDays.push(new BudgetDay(day.date, this._userId));
      });
    } else {
      const startDay = this._beginningRunningTotalDay.date;
      const endDay = new Date(
        this._calendar.month?.year ?? 0,
        this._calendar.month?.number ?? 0,
        this._calendar.month?.days.length ?? 0
      );
      const dayDifference = Math.floor(
        (endDay.getTime() - startDay.getTime()) / (1000 * 3600 * 24)
      );
      const daysToAdd = [];
      for (let i = 0; i < dayDifference; i++) {
        daysToAdd.push(new Date(startDay.getTime() + i * 1000 * 3600 * 24));
      }

      daysToAdd.forEach((day) => {
        const adjustedDay = this._adjustedBudgetDays.find((budgetDay) => {
          return (
            budgetDay.date.getMonth() === day.getMonth() &&
            budgetDay.date.getFullYear() === day.getFullYear() &&
            budgetDay.date.getDate() === day.getDate()
          );
        });
        if (adjustedDay) {
          this._budgetDays.push(adjustedDay);
        } else {
          this._budgetDays.push(new BudgetDay(day, this._userId));
        }
      });

      console.log(this._budgetDays);
    }
  }

  loadAdjustedBudgetDays(budgetDays: BudgetDay[]) {
    this._adjustedBudgetDays = budgetDays.sort((a, b) => {
      return a.date < b.date ? -1 : 1;
    });
    this.setState(new AdjustedBudgetDaysLoadedState(this));
  }

  setBeginningRunningTotalDay() {
    if (this._adjustedBudgetDays.length === 0) {
      throw new Error("No budget days loaded");
    }
    // get earliest adjusted Running total budget day
    const earliestBudgetDay = this._adjustedBudgetDays.find((budgetDay) => {
      budgetDay.runningTotal.isAdjusted;
    });
  }

  mapAdjustedBudgetDays() {
    if (this._adjustedBudgetDays.length === 0) {
      throw new Error("No budget days loaded");
    }

    this._adjustedBudgetDays.forEach((adjustedDay) => {
      const matchDay = this._budgetDays.find((day) => {
        return (
          day.date.getMonth() === adjustedDay.date.getMonth() &&
          day.date.getFullYear() === adjustedDay.date.getFullYear() &&
          day.date.getDate() === adjustedDay.date.getDate()
        );
      });

      if (matchDay) {
        const matchIndex = this._budgetDays.findIndex(
          (day) =>
            day.date.getDate() === matchDay.date.getDate() &&
            day.date.getMonth() === matchDay.date.getMonth() &&
            day.date.getFullYear() === matchDay.date.getFullYear()
        );

        this._budgetDays[matchIndex] = adjustedDay;
      }
    });
  }

  getCurrentMonthBudget(): BudgetDay[] {
    return this._currentCalendarBudget;
  }

  setCurrentMonthBudget() {
    this._currentCalendarBudget = this._budgetDays.filter((budgetDay) => {
      return (
        budgetDay.date.getMonth() === this._calendar.month?.number &&
        budgetDay.date.getFullYear() === this._calendar.month?.year
      );
    });
  }

  setState(state: IBudgetMediatorState) {
    this._state = state;
  }

  storeBudgetDaysInIndexedDb() {
    const dbOpenRequest = indexedDB.open("budget", 1);

    dbOpenRequest.onsuccess = () => {
      const db = dbOpenRequest.result;
      const budgetDays = db
        .transaction("budgetDays", "readwrite")
        .objectStore("budgetDays");

      this._budgetDays.forEach((budgetDay) => {
        budgetDays.add(budgetDay);
      });

      db.close();
    };
  }
}
