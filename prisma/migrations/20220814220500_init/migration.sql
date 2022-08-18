-- CreateTable
CREATE TABLE "BudgetDay" (
    "id" CHAR(16) NOT NULL,
    "day" TIMESTAMP(3) NOT NULL,
    "runningTotal" DECIMAL(65,30) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "BudgetDay_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "RecurringTransactions" (
    "id" CHAR(16) NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,
    "name" TEXT NOT NULL,
    "budgetDayId" CHAR(16),

    CONSTRAINT "RecurringTransactions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BudgetDay_id_key" ON "BudgetDay"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "RecurringTransactions_id_key" ON "RecurringTransactions"("id");
