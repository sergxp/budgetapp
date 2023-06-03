import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { JsonSerializer } from "typescript-json-serializer";
import { createBudgetDayCollection } from "../../application/factories/budgetFactory";
import { BudgetDayDto } from "../../application/models/budgetDayDto";
import { BudgetDay } from "../../domain/BudgetDay";
import { MonthlyBudget } from "../../domain/MonthlyBudget";

export const useMonthlyBudget = (month: number) => {
  const { isLoading, data } = useQuery(["budget"], () => {
    return axios
      .get<BudgetDayDto[]>(
        `${process.env.NEXT_PUBLIC_API_BASE}/budget/month/${month}`
      )
      .then((res) => res.data);
  });

  const [monthlyBudget, setMonthlyBudget] = useState<MonthlyBudget>();

  useEffect(() => {
    if (data) {
      const budgetDays = createBudgetDayCollection(data);
      setMonthlyBudget(new MonthlyBudget(budgetDays, 0));
    }
  }, [data]);

  return {
    monthlyBudget,
  };
};
