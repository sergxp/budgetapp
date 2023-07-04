import {
  createMap,
  createMapper,
  forMember,
  mapFrom,
  typeConverter,
} from "@automapper/core";
import { classes } from "@automapper/classes";
import { BudgetDay } from "../../domain/BudgetDay";
import { BudgetDayDto } from "../models/budgetDayDto";
import { RunningTotal } from "../../domain/RunningTotal";
import { runInAction } from "mobx";

export const mapper = createMapper({
  strategyInitializer: classes(),
});

createMap(
  mapper,
  BudgetDayDto,
  BudgetDay,
  typeConverter(
    Number,
    RunningTotal,
    (source) => new RunningTotal(source, true)
  ),
  forMember(
    (dest) => dest.date,
    mapFrom((source) => new Date(source.date))
  )
);
