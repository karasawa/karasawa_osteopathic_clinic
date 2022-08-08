import type { NextPage } from "next";
import styled from "styled-components";
import Layout from "../components/Layout";
import ReserveForm from "../components/molecules/ReserveForm";

const Reservation: NextPage = () => {
  return (
    <Layout title="reservation">
      <MainWrapper>
        <ReserveForm />
      </MainWrapper>
    </Layout>
  );
};

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
