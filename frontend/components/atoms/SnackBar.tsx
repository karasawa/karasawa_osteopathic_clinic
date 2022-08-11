import { Dispatch, SetStateAction, FC } from "react";
import Snackbar from "@mui/material/Snackbar";
import type { State } from "../molecules/ReserveForm";

type Props = {
  state: State;
  setState: Dispatch<SetStateAction<State>>;
};

const SnackBar: FC<Props> = ({ state, setState }) => {
  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="予約が完了しました"
        key={vertical + horizontal}
        sx={{ m: -2.5 }}
      />
    </div>
  );
};

export default SnackBar;
