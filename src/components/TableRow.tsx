import { Box } from "@mui/system";
import moment from "moment";
import Reac, { CSSProperties, useState } from "react";
import { Icon } from "semantic-ui-react";
import { RecurringTransaction } from "../../domain/RecurringTransaction";
import "../utils/numberExtensions";
import { TransactionsModal } from "./TransactionsModal";

export const TableRow: React.FC<{
  day: Date;
  runningTotal: number;
  totalTransactions?: number;
  recurringTransactions?: RecurringTransaction[];
}> = (props) => {
  const buildRecurringTransactions = props.recurringTransactions?.map((x) => (
    <span>{x.name},</span>
  ));

  const [openTransactions, setOpenTranactions] = useState(false);

  return (
    <div className="flex odd:bg-blue-50 even:bg-white px-2 py-1">
      <div className="px-2 flex flex-1">{moment(props.day).format("l")}</div>
      <div className="px-2 flex flex-1">{props.runningTotal.toCurrency()}</div>
      <div className="px-2 flex flex-1">
        {props.totalTransactions?.toCurrency()}
      </div>
      <div className="px-2 flex flex-1">
        {props.recurringTransactions && props.recurringTransactions.length > 0
          ? buildRecurringTransactions
          : ""}

        <Box
          className="ml-auto w-10 cursor-pointer"
          sx={{
            "&:hover i": {
              color: "#348bf6",
            },
          }}
          onClick={() => setOpenTranactions(true)}
        >
          <Icon name="edit" size="small" className="text-stone-500" />
        </Box>
      </div>
      <TransactionsModal
        date={moment(props.day).format("l")}
        transactions={props.recurringTransactions}
        isOpen={openTransactions}
      />
    </div>
  );
};
