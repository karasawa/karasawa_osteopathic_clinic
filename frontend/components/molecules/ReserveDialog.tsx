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
  width: 500,
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
          <H3Text>ご予約情報を入力してください。</H3Text>
          <ReceptionWrapper>
            <PText>受付時間</PText>
            <PText>平日　9:00～12:30　/　15:00～20:00</PText>
            <PText style={{ marginBottom: "16px" }}>土曜　9:00～14:30</PText>
          </ReceptionWrapper>
          <ReserveForm />
        </Box>
      </Modal>
    </div>
  );
};

export default ReserveDialog;

const H3Text = styled.h3`
  margin-top: 0;
  margin-bottom: 16px;
`;

const PText = styled.p`
  margin: 0;
  font-size: 13px;
`;

const ReceptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;
