import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import IconButton from "@mui/material/IconButton";
import { useRouter } from "next/router";

const Slider = () => {
  const router = useRouter();
  const [count, setCount] = useState<number>(1);

  const imageArr = ["/shunpudo.jpg", "/honjo.jpg", "/pug.jpg"];

  const imageSubArr = ["/hana.jpg", "/shitakara.jpg", "/nanikore.jpg"];

  console.log(router.pathname);

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
    <SliderWrapper>
      <IconButton
        onClick={leftSlide}
        sx={
          router.pathname === "/introduction"
            ? {
                position: "relative",
                zIndex: 100,
                top: "45%",
                left: "-50px",
                bgcolor: "#000",
                "&:hover": {
                  bgcolor: "#000",
                  opacity: 0.7,
                },
              }
            : { position: "relative", zIndex: 100 }
        }
      >
        <KeyboardDoubleArrowLeftIcon
          sx={{
            color: "#fff",
            opacity: 0.7,
          }}
        />
      </IconButton>
      <Image
        src={
          router.pathname === "/introduction"
            ? imageSubArr[count]
            : imageArr[count]
        }
        layout="fill"
        style={{ opacity: 0.9 }}
      />
      <IconButton
        onClick={rightSlide}
        sx={
          router.pathname === "/introduction"
            ? {
                position: "relative",
                zIndex: 100,
                top: "45%",
                right: "-382px",
                bgcolor: "#000",
                "&:hover": {
                  bgcolor: "#000",
                  opacity: 0.7,
                },
              }
            : { position: "relative", zIndex: 100 }
        }
      >
        <KeyboardDoubleArrowRightIcon
          sx={{
            color: "#fff",
            opacity: 0.7,
          }}
        />
      </IconButton>
    </SliderWrapper>
  );
};

export default Slider;

const SliderWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;
