import '../utils/dateExtensions.ts'

export const TableRow: React.FC<{
  date: Date;
  runningTotal: number;
  transactions: number;
  recurringTransactions: string[];
}> = (props) => {
  const buildRecurringTransactions = props.recurringTransactions.map((x) => (
    <span key={x}>{x},</span>
  ));
  return (
    <div
      key={props.date.toShortDateString()}
      className="flex odd:bg-blue-50 even:bg-white px-2 py-1"
    >
      <div className="px-2 flex-1">{props.date.toShortDateString()}</div>
      <div className="px-2 flex-1">{props.runningTotal}</div>
      <div className="px-2 flex-1">{props.transactions.toString()}</div>
      <div className="px-2 flex-1">{buildRecurringTransactions}</div>
    </div>
  );
};
