import type { NextPage } from "next";
import Head from "next/head";
import { TableRow } from "../components/TableRow";
import { MonthlyBudget } from "../../domain/MonthlyBudget";
import { useMonthlyBudget } from "../hooks/useMonthlyBudget";
import { getBudgetDaysData } from "../utils/budgetDataUtils";

const Home: NextPage = () => {
  const budgetMonth: MonthlyBudget = new MonthlyBudget(
    getBudgetDaysData(),
    3212
  );
  const { isLoading, data } = useMonthlyBudget(8);

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>{JSON.stringify(data)}</div>
      <main className="flex w-full justify-center">
        <div className="flex flex-col w-3/4">
          <div className="flex h-40"></div>
          <div className="rounded-t-lg flex w-full bg-blue-200 p-2">
            <ColumnHeader name="Date" />
            <ColumnHeader name="Running Total" />
            <ColumnHeader name="Transactions" />
            <ColumnHeader name="Recurring Transactions" />
          </div>
          <div>
            {budgetMonth.days.map((day) => (
              <TableRow
                key={day.date.toDateString()}
                date={day.date}
                recurringTransactions={day.transactions.getTransactionNames()}
                runningTotal={day.runningTotal.amount}
                transactions={day.transactions.total}
              ></TableRow>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

const ColumnHeader: React.FC<{ name: string }> = (props) => {
  return <div className="p-2 flex-1 text-blue-800 font-bold">{props.name}</div>;
};
export default Home;
