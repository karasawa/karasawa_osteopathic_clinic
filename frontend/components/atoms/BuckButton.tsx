import ReplyIcon from "@mui/icons-material/Reply";
import styled from "styled-components";
import { useRouter } from "next/router";

const BuckButton = () => {
  const router = useRouter();

  return (
    <ButtonWrapper onClick={() => router.back()}>
      <ReplyIcon />
      <BuckText>前の画面に戻る</BuckText>
    </ButtonWrapper>
  );
};

export default BuckButton;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  color: #000;
  margin-left: 20px;
  cursor: pointer;
  &:hover {
    color: #74905d;
  }
`;

const BuckText = styled.p`
  margin-left: 6px;
`;
