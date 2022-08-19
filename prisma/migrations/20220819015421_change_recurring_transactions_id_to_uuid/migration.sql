/*
  Warnings:

  - The primary key for the `RecurringTransactions` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `id` on the `RecurringTransactions` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "RecurringTransactions" DROP CONSTRAINT "RecurringTransactions_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ADD CONSTRAINT "RecurringTransactions_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "RecurringTransactions_id_key" ON "RecurringTransactions"("id");
