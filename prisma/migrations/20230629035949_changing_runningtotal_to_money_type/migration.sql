/*
  Warnings:

  - The `runningTotal` column on the `BudgetDay` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "BudgetDay" DROP COLUMN "runningTotal",
ADD COLUMN     "runningTotal" MONEY;
