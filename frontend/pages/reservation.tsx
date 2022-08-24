import type { NextPage } from "next";
import { memo } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import ReserveForm from "../components/molecules/ReserveForm";
// eslint-disable-next-line react/display-name
const Reservation: NextPage = memo(() => {
  return (
    <Layout title="reservation">
      <MainWrapper>
        <ReserveForm week={[]} />
      </MainWrapper>
    </Layout>
  );
});

export default Reservation;

const MainWrapper = styled.div`
  width: 100%;
  height: 660px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #281914;
  background-color: #b4cf9e;
  position: relative;
  color: #281914;
`;
