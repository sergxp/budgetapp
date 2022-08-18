/*
  Warnings:

  - The primary key for the `BudgetDay` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "BudgetDay" DROP CONSTRAINT "BudgetDay_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "BudgetDay_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "RecurringTransactions" (
    "id" CHAR(16) NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,
    "name" TEXT NOT NULL,
    "budgetDayId" TEXT,

    CONSTRAINT "RecurringTransactions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RecurringTransactions_id_key" ON "RecurringTransactions"("id");

-- AddForeignKey
ALTER TABLE "RecurringTransactions" ADD CONSTRAINT "RecurringTransactions_budgetDayId_fkey" FOREIGN KEY ("budgetDayId") REFERENCES "BudgetDay"("id") ON DELETE SET NULL ON UPDATE CASCADE;
