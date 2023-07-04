import axios from "axios";
import { useQuery } from "react-query";
import { BudgetDayDto } from "../../application/models/budgetDayDto";

export const useGetBudget = () => {
  const { data, error, isLoading } = useQuery("budget", () => {
    return axios
      .get<BudgetDayDto[]>(`${process.env.NEXT_PUBLIC_API_BASE}/budget`)
      .then((res) => res.data);
  });

  return {
    budget: data,
    error,
    isLoading,
  };
};
