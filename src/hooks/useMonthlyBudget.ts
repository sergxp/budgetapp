import { BudgetDay } from "@prisma/client";
import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";

export const useMonthlyBudget = (month: number) => {
  return useQuery(["budget"], () => {
    return axios
      .get<BudgetDay[]>(
        `${process.env.NEXT_PUBLIC_API_BASE}/budget/month/${month}`
      )
      .then((res) => res.data);
  });
};
