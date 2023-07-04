import { action, makeObservable, observable } from "mobx";

export class Calendar {
  @observable private _month: Month | null = null;

  constructor(_month?: Month) {
    makeObservable(this);
    if (_month) {
      this._month = _month;
    } else {
      this._month = new Month(new Date().getMonth(), new Date().getFullYear());
    }
  }

  get month(): Month | null {
    return this._month;
  }

  @action
  previousMonth() {
    if (this.month === null) throw new Error("Month is undefined");

    const currentMonth = this.month.days[0]!.date.getMonth();
    const currentYear = this.month.days[0]!.date.getFullYear();
    let newMonth = currentMonth - 1;
    let newYear = currentYear;
    if (newMonth < 0) {
      newMonth = 11;
      newYear--;
    }
    this._month = new Month(newMonth, newYear);
  }

  @action
  nextMonth() {
    if (this.month === null) throw new Error("Month is undefined");

    const currentMonth = this.month.days[0]!.date.getMonth();
    const currentYear = this.month.days[0]!.date.getFullYear();
    let newMonth = currentMonth + 1;
    let newYear = currentYear;
    if (newMonth > 11) {
      newMonth = 0;
      newYear++;
    }
    this._month = new Month(newMonth, newYear);
  }

  @action
  currentMonth() {
    try {
      this._month = new Month(new Date().getMonth(), new Date().getFullYear());
    } catch (e) {
      throw new Error("Error getting current month");
    }
  }
}

export class Day {
  date: Date;

  constructor(date: Date) {
    this.date = new Date(date);
  }
}

export class Month {
  private _days: Day[] = [];
  private _number: number;
  private _year: number;

  constructor(month: number, year: number) {
    this._days = this.getDaysInMonth(month, year);
    this._number = month;
    this._year = year;
  }

  get days(): Day[] {
    return this._days;
  }

  get number(): number {
    return this._number;
  }

  get year(): number {
    return this._year;
  }

  getDaysInMonth(month: number, year: number) {
    const daysInMonth = [];
    const date = new Date(year, month, 1);
    while (date.getMonth() === month) {
      daysInMonth.push(new Day(date));
      date.setDate(date.getDate() + 1);
    }
    return daysInMonth;
  }
}
