import type { NextPage } from "next";
import Head from "next/head";
import { TableRow } from "../components/TableRow";
import { useMonthlyBudget } from "../hooks/useMonthlyBudget";
import { Calendar, Month } from "../../domain/Calendar";
import { Pagination } from "../components/Pagination";
import { useEffect, useState } from "react";
import { observer } from "mobx-react";
import { useGetBudget } from "../hooks/useGetBudget";
import { useBudget } from "../hooks/useBudget";

const Home: NextPage = observer(() => {
  const { budget } = useBudget();

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col w-full items-center">
        <div className="flex flex-col w-3/4">
          <div className="flex h-40"></div>
          <div className="rounded-t-lg flex w-full bg-blue-200 p-2">
            <ColumnHeader name="Date" />
            <ColumnHeader name="Running Total" />
            <ColumnHeader name="Total Transactions" />
            <ColumnHeader name="Transactions" />
          </div>
          <div>
            {budget &&
              budget
                .getCurrentMonthBudget()
                .map((budgetDay) => (
                  <TableRow
                    key={budgetDay.date.getDate()}
                    day={budgetDay.date}
                    recurringTransactions={undefined}
                    runningTotal={budgetDay.runningTotal}
                    totalTransactions={undefined}
                  ></TableRow>
                ))}
          </div>
        </div>
        <Pagination
          current={() => budget.calendar.currentMonth()}
          next={() => budget.calendar.nextMonth()}
          previous={() => budget.calendar.previousMonth()}
        />
      </main>
    </>
  );
});

const ColumnHeader: React.FC<{ name: string }> = (props) => {
  return <div className="p-2 flex-1 text-blue-800 font-bold">{props.name}</div>;
};
export default Home;
