import moment from "moment";

export const TableRow: React.FC<{
  day: Date;
  runningTotal: number;
  transactions: number;
  recurringTransactions: string[];
}> = (props) => {
  const buildRecurringTransactions = props.recurringTransactions.map((x) => (
    <span key={x}>{x},</span>
  ));
  return (
    <div
      key={moment(props.day).format("l")}
      className="flex odd:bg-blue-50 even:bg-white px-2 py-1"
    >
      <div className="px-2 flex-1">{moment(props.day).format("l")}</div>
      <div className="px-2 flex-1">{props.runningTotal}</div>
      <div className="px-2 flex-1">{props.transactions.toString()}</div>
      <div className="px-2 flex-1">{buildRecurringTransactions}</div>
    </div>
  );
};
