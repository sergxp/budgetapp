import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { Button, Modal } from "semantic-ui-react";
import { RecurringTransaction } from "../../domain/RecurringTransaction";

export const TransactionsModal: React.FC<{
  isOpen: boolean;
  date: string;
  transactions: RecurringTransaction[];
}> = (props) => {
  const [open, setOpen] = useState(props.isOpen);

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
            // borderBlock: "solid",
            // borderWidth: 1,
            textAlign: "center",
            padding: 1,
          }}
        >
          <span>Add Another Transaction</span>
        </Box>
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
};
