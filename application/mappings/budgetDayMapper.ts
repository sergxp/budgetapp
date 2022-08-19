import { BudgetDay as PrismaBudgetDay } from "@prisma/client"
import { BudgetDay } from "../../domain/BudgetDay"

export const toDomainBudgetDay = (prismmaDTO: PrismaBudgetDay): BudgetDay =>
    new BudgetDay(prismmaDTO.day, prismmaDTO.)