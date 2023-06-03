import { JsonObject, JsonProperty } from "typescript-json-serializer";

@JsonObject()
export class BudgetDayDto {
  @JsonProperty()
  id: string;

  @JsonProperty()
  day: Date;

  @JsonProperty()
  runningTotal: number;

  @JsonProperty()
  recurringTransactions: RecurringTransactionDto[];

  @JsonProperty()
  userId: number;
}

@JsonObject()
export class RecurringTransactionDto {
  @JsonProperty()
  id: string;

  @JsonProperty()
  amount: number;

  @JsonProperty()
  name: string;

  @JsonProperty()
  budgetDayId: string | null;
}
