-- AlterTable
ALTER TABLE "User" ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "BudgetDay" ADD CONSTRAINT "BudgetDay_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecurringTransactions" ADD CONSTRAINT "RecurringTransactions_budgetDayId_fkey" FOREIGN KEY ("budgetDayId") REFERENCES "BudgetDay"("id") ON DELETE SET NULL ON UPDATE CASCADE;
