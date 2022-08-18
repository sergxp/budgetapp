/*
  Warnings:

  - The primary key for the `BudgetDay` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `RecurringTransactions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "RecurringTransactions" DROP CONSTRAINT "RecurringTransactions_budgetDayId_fkey";

-- AlterTable
ALTER TABLE "BudgetDay" DROP CONSTRAINT "BudgetDay_pkey",
ALTER COLUMN "id" SET DATA TYPE CHAR(32),
ADD CONSTRAINT "BudgetDay_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "RecurringTransactions";
