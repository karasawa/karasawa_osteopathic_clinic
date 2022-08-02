import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import IconButton from "@mui/material/IconButton";

const Slider = () => {
  const [count, setCount] = useState(1);

  const imageArr = ["/shunpudo.jpg", "/honjo.jpg", "/pug.jpg"];

  const leftSlide = async () => {
    if (count === 0) setCount(2);
    else if (count === 1) setCount(0);
    else if (count === 2) setCount(1);
  };

  const rightSlide = async () => {
    if (count === 0) setCount(1);
    else if (count === 1) setCount(2);
    else if (count === 2) setCount(0);
  };

  return (
    <ImageWrapper>
      <IconButton
        onClick={leftSlide}
        sx={{ position: "relative", zIndex: 100 }}
      >
        <KeyboardDoubleArrowLeftIcon
          sx={{
            color: "#fff",
            opacity: 0.7,
          }}
        />
      </IconButton>
      <Image src={imageArr[count]} layout="fill" style={{ opacity: 0.9 }} />
      <IconButton
        onClick={rightSlide}
        sx={{ position: "relative", zIndex: 100 }}
      >
        <KeyboardDoubleArrowRightIcon
          sx={{
            color: "#fff",
            opacity: 0.7,
          }}
        />
      </IconButton>
    </ImageWrapper>
  );
};

export default Slider;

const ImageWrapper = styled.div`
  flex: 0.7;
  position: relative;
  height: 660px;
  border: 1px solid #281914;
  background-color: #000;
`;
