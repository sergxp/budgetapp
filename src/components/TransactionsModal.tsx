import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { Button, Icon, Modal } from "semantic-ui-react";
import { RecurringTransaction } from "../../domain/RecurringTransaction";
import { EditableInput } from "./EditableInput";

export const TransactionsModal: React.FC<{
  isOpen: boolean;
  date: string;
  transactions?: RecurringTransaction[];
}> = (props) => {
  const [open, setOpen] = useState(props.isOpen);
  const [transactions, setTransactions] = useState<RecurringTransaction[]>(
    props.transactions ?? []
  );

  const createNewTransaction = (name: string, amount: number) => {
    setTransactions([
      ...transactions,
      {
        name: name,
        amount: amount,
      },
    ]);
  };

  useEffect(() => {
    setOpen(props.isOpen);
  }, [props.isOpen]);

  const deleteTransaction = (index: number): void => {
    return setTransactions([
      ...transactions.slice(0, index),
      ...transactions.slice(index + 1),
    ]);
  };

  const updateTransactionAmount = (
    index: number,
    transaction: RecurringTransaction,
    value: string
  ): void => {
    return setTransactions([
      ...transactions.slice(0, index),
      { ...transaction, amount: +value },
      ...transactions.slice(index + 1),
    ]);
  };

  const updateTransactionName = (
    index: number,
    transaction: RecurringTransaction,
    value: string
  ): void => {
    return setTransactions([
      ...transactions.slice(0, index),
      { ...transaction, name: value },
      ...transactions.slice(index + 1),
    ]);
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      style={{ width: 500 }}
      className="transaction-modal"
    >
      <Modal.Header>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          Transactions
          <p className="text-base font-normal">{props.date}</p>
          <Box sx={{ "&:hover": { cursor: "pointer" } }}>
            <Icon name="close" onClick={() => setOpen(false)} />
          </Box>
        </Box>
      </Modal.Header>

      <Box>
        <Box
          sx={{
            textAlign: "center",
            padding: 1,
          }}
        >
          <Button onClick={() => createNewTransaction("New Transactions", 0)}>
            Add Transaction
          </Button>
        </Box>
        {transactions.map((transaction, index) => (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 2,
            }}
          >
            <Box sx={{ flex: 1 }}>
              <EditableInput
                value={transaction.name}
                updateValue={(value) =>
                  updateTransactionName(index, transaction, value)
                }
                sx={{ padding: 1 }}
              />
            </Box>
            <Box sx={{ flex: 1, display: "flex" }}>
              <span style={{ padding: 8, paddingTop: 10 }}>$</span>
              <EditableInput
                value={transaction.amount.toString()}
                updateValue={(value) =>
                  updateTransactionAmount(index, transaction, value)
                }
                sx={{
                  padding: 1,
                  flexShrink: 0,
                  width: "50%",
                }}
              />
            </Box>
            <Box
              sx={{
                padding: 1,
                "&:hover": { cursor: "pointer", color: "#1e84ff" },
              }}
            >
              <Icon
                name="trash alternate"
                size="large"
                onClick={() => deleteTransaction(index)}
              />
            </Box>
          </Box>
        ))}
      </Box>
    </Modal>
  );
};
