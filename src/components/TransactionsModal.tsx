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

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      style={{ width: 500 }}
      className="transaction-modal"
    >
      <Modal.Header>
        Transactions
        <p className="text-base font-normal">{props.date}</p>
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
                setValue={(value) =>
                  updateTransactionName(index, transaction, value)
                }
                sx={{ padding: 1 }}
              />
            </Box>
            <Box sx={{ flex: 1, display: "flex" }}>
              <span style={{ padding: 8, paddingTop: 10 }}>$</span>
              <EditableInput
                value={transaction.amount.toString()}
                setValue={(value) =>
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
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Nope
        </Button>
        <Button
          content="Yep, that's me"
          labelPosition="right"
          icon="checkmark"
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  );

  function deleteTransaction(index: number) {
    return setTransactions([
      ...transactions.slice(0, index),
      ...transactions.slice(index + 1),
    ]);
  }

  function updateTransactionAmount(
    index: number,
    transaction: RecurringTransaction,
    value: string
  ): void {
    return setTransactions([
      ...transactions.slice(0, index),
      { ...transaction, amount: +value },
      ...transactions.slice(index + 1),
    ]);
  }

  function updateTransactionName(
    index: number,
    transaction: RecurringTransaction,
    value: string
  ): void {
    return setTransactions([
      ...transactions.slice(0, index),
      { ...transaction, name: value },
      ...transactions.slice(index + 1),
    ]);
  }
};
