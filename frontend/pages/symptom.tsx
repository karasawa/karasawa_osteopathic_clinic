import Layout from "../components/Layout";
import type { NextPage, GetStaticProps } from "next";
import styled from "styled-components";
import SymptomCard from "../components/molecules/SymptomCard";
import { getAllSymptoms } from "../lib/symptoms";
import BuckButton from "../components/atoms/BuckButton";

type Props = {
  symptoms: [
    {
      id: string;
      body_part: string;
      small_introduction: string;
      big_introduction: string;
      cause: string;
      solution: string;
      image: string;
      created_at: Date;
    }
  ];
};

type SymptomModel = {
  id: string;
  body_part: string;
  small_introduction: string;
  big_introduction: string;
  cause: string;
  solution: string;
  image: string;
  created_at: Date;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const symptoms = await getAllSymptoms();
  return {
    props: {
      symptoms,
    },
    revalidate: 3,
  };
};

const Symptom: NextPage<Props> = ({ symptoms }) => {
  return (
    <Layout title="symptom">
      <MainWrapper>
        <BuckButton />
        {symptoms.map((symptom: SymptomModel) => (
          <SymptomCard key={symptom.id} symptom={symptom} />
        ))}
        <div
          style={{ content: "", display: "block", width: "345px", order: 1 }}
        ></div>
        <div
          style={{ content: "", display: "block", width: "345px", order: 1 }}
        ></div>
      </MainWrapper>
    </Layout>
  );
};

export default Symptom;

const MainWrapper = styled.div`
  width: 100%;
  height: 660px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  border: 1px solid #281914;
  background-color: #b4cf9e;
  position: relative;
  color: #281914;
  padding: 53px 50px 50px 50px;
`;
