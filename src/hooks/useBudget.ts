import { Calendar } from "../../domain/Calendar";
import { useGetBudget } from "./useGetBudget";
import { useEffect, useState } from "react";
import { mapper } from "../../application/mappings/mapper";
import { BudgetDayDto } from "../../application/models/budgetDayDto";
import { BudgetDay } from "../../domain/BudgetDay";
import { BudgetMediator } from "../../application/mediators/budget/BudgetMediator";

export const useBudget = () => {
  const { budget: budgetDto, error } = useGetBudget();
  const [budgetMediator] = useState<BudgetMediator>(
    new BudgetMediator(new Calendar(), 1)
  );

  useEffect(() => {
    if (budgetDto && budgetDto.length > 0) {
      const budget = budgetDto.map((dto) =>
        mapper.map(dto, BudgetDayDto, BudgetDay)
      );

      budgetMediator.loadAdjustedBudgetDays(budget);
    }
  }, [budgetDto]);

  return {
    budget: budgetMediator,
  };
};
