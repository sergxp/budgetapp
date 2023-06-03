/*
  Warnings:

  - Added the required column `userId` to the `RecurringTransactions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "RecurringTransactions" ADD COLUMN     "userId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "RunningTotalEntry" (
    "id" UUID NOT NULL,
    "amount" MONEY NOT NULL,
    "isBeginning" BOOLEAN NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "RunningTotalEntry_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RunningTotalEntry_id_key" ON "RunningTotalEntry"("id");

-- AddForeignKey
ALTER TABLE "RecurringTransactions" ADD CONSTRAINT "RecurringTransactions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RunningTotalEntry" ADD CONSTRAINT "RunningTotalEntry_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
