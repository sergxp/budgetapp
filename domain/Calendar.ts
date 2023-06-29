import { action, makeObservable, observable } from "mobx";

export class Calendar {
  @observable month: Month | null = null;

  constructor(_month?: Month) {
    makeObservable(this);
    if (_month) {
      this.month = _month;
    } else {
      this.month = new Month(new Date().getMonth(), new Date().getFullYear());
    }
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
    this.month = new Month(newMonth, newYear);
  }

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
    this.month = new Month(newMonth, newYear);
  }

  @action
  currentMonth() {
    try {
      this.month = new Month(new Date().getMonth(), new Date().getFullYear());
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
  days: Day[] = [];

  constructor(month: number, year: number) {
    this.days = this.getDaysInMonth(month, year);
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
