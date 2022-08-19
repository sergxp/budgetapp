/*
  Warnings:

  - The primary key for the `BudgetDay` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `budgetDayId` column on the `RecurringTransactions` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `id` on the `BudgetDay` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "RecurringTransactions" DROP CONSTRAINT "RecurringTransactions_budgetDayId_fkey";

-- AlterTable
ALTER TABLE "BudgetDay" DROP CONSTRAINT "BudgetDay_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ADD CONSTRAINT "BudgetDay_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "RecurringTransactions" DROP COLUMN "budgetDayId",
ADD COLUMN     "budgetDayId" UUID;

-- CreateIndex
CREATE UNIQUE INDEX "BudgetDay_id_key" ON "BudgetDay"("id");

-- AddForeignKey
ALTER TABLE "RecurringTransactions" ADD CONSTRAINT "RecurringTransactions_budgetDayId_fkey" FOREIGN KEY ("budgetDayId") REFERENCES "BudgetDay"("id") ON DELETE SET NULL ON UPDATE CASCADE;
