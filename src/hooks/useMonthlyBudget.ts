import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { BudgetDayDto } from "../../application/models/budgetDayDto";
import { BudgetDay } from "../../domain/BudgetDay";
import { MonthlyBudget } from "../../domain/MonthlyBudget";

export const useMonthlyBudget = (month: number) => {
  const { isLoading, data } = useQuery(["budget"], () => {
    return axios
      .get<BudgetDayDto[]>(
        `${process.env.NEXT_PUBLIC_API_BASE}/budget/month/${month}`
      )
      .then((res) => res.data.map((day) => BudgetDay.fromDto(day)));
  });

  const [monthlyBudget, setMonthlyBudget] = useState<MonthlyBudget>();

  useEffect(() => {
    if (data) {
      setMonthlyBudget(new MonthlyBudget(data, 0));
    }
  }, [data]);

  return {
    monthlyBudget,
  };
};
