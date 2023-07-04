import axios from "axios";
import { useMutation, useQuery } from "react-query";
import { BudgetDay } from "../../domain/BudgetDay";
import { BudgetDayDto } from "../../application/models/budgetDayDto";

export const useCreateBudgetDay = () => {
  const { isLoading, error, mutate } = useMutation(
    (budgetDay: BudgetDayDto) => {
      return axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE}/budget/day`,
        budgetDay
      );
    }
  );

  return { isLoading, error, mutate };
};
