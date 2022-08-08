import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { FC, Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import ClearIcon from "@mui/icons-material/Clear";
import IconButton from "@mui/material/IconButton";
import ReserveForm from "./ReserveForm";

type Props = {
  reserveOpen: boolean;
  setReserveOpen: Dispatch<SetStateAction<boolean>>;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 6,
  border: "none",
  borderRadius: "6px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const ReserveDialog: FC<Props> = ({ reserveOpen, setReserveOpen }) => {
  return (
    <div>
      <Modal open={reserveOpen} onClose={() => setReserveOpen(false)}>
        <Box sx={style}>
          <IconButton
            onClick={() => setReserveOpen(false)}
            sx={{ position: "absolute", top: 0, right: 0 }}
          >
            <ClearIcon />
          </IconButton>
          <ReserveForm />
        </Box>
      </Modal>
    </div>
  );
};

export default ReserveDialog;
