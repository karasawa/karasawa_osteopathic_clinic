import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { FC, Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import ClearIcon from "@mui/icons-material/Clear";
import IconButton from "@mui/material/IconButton";

type Props = {
  tellOpen: boolean;
  setTellOpen: Dispatch<SetStateAction<boolean>>;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  border: "none",
  borderRadius: "6px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const TellDialog: FC<Props> = ({ tellOpen, setTellOpen }) => {
  return (
    <div>
      <Modal open={tellOpen} onClose={() => setTellOpen(false)}>
        <Box sx={style}>
          <IconButton
            onClick={() => setTellOpen(false)}
            sx={{ position: "absolute", top: 0, right: 0 }}
          >
            <ClearIcon />
          </IconButton>
          <TelNumber>TEL：080-1234-5678</TelNumber>
          <TelText href="tel:080-1234-5678">
            電話をかけてもよろしいですか？
          </TelText>
        </Box>
      </Modal>
    </div>
  );
};

export default TellDialog;

const TelNumber = styled.h3``;

const TelText = styled.a`
  cursor: pointer;
  &:hover {
    color: #74905d;
    border-bottom: 1px solid #74905d;
  }
`;
