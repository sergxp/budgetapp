import type { NextPage } from "next";
import Head from "next/head";
import { TableRow } from "../components/TableRow";
import { useMonthlyBudget } from "../hooks/useMonthlyBudget";
import { Calendar, Month } from "../../domain/Calendar";
import { Pagination } from "../components/Pagination";
import { useState } from "react";
import { observer } from "mobx-react";

const Home: NextPage = observer(() => {
  const { monthlyBudget } = useMonthlyBudget(8);

  const [calendar] = useState<Calendar>(new Calendar());

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
            {calendar &&
              calendar.month.days.map((day) => (
                <TableRow
                  key={day.date.getDate()}
                  day={day.date}
                  recurringTransactions={undefined}
                  runningTotal={0}
                  totalTransactions={undefined}
                ></TableRow>
              ))}
          </div>
        </div>
        <Pagination
          current={() => calendar.currentMonth()}
          next={() => calendar.nextMonth()}
          previous={() => calendar.previousMonth()}
        />
      </main>
    </>
  );
});

const ColumnHeader: React.FC<{ name: string }> = (props) => {
  return <div className="p-2 flex-1 text-blue-800 font-bold">{props.name}</div>;
};
export default Home;
