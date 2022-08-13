import type { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "node:querystring";
import Layout from "../../components/Layout";
import { getAllSymptomIds, getSymptom } from "../../lib/symptoms";
import styled from "styled-components";
import BuckButton from "../../components/atoms/BuckButton";

interface Params extends ParsedUrlQuery {
  id: string;
}

type Props = {
  symptom: {
    id: string;
    body_part: string;
    small_introduction: string;
    big_introduction: string;
    cause: string;
    solution: string;
    image: string;
    created_at: Date;
  };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = await getAllSymptomIds();
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const symptom = await getSymptom(params!.id);
  return {
    props: {
      symptom,
    },
    revalidate: 3,
  };
};

const DetailSymptom: NextPage<Props> = ({ symptom }) => {
  return (
    <Layout title={symptom.id}>
      <MainWrapper>
        <BuckButton />
        <SubWrapper>
          <Introduction>
            <TextH3>{symptom.body_part}</TextH3>
            <TextP>{symptom.big_introduction}</TextP>
          </Introduction>
          <Cause>
            <TextH3>原因</TextH3>
            <TextP>{symptom.cause}</TextP>
          </Cause>
          <Solution>
            <TextH3>当院での治療法</TextH3>
            <TextP>{symptom.solution}</TextP>
          </Solution>
        </SubWrapper>
      </MainWrapper>
    </Layout>
  );
};

export default DetailSymptom;

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

const SubWrapper = styled.div`
  flex: 0.5;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 25px;
`;

const Introduction = styled.div`
  flex: 0.34;
`;

const Cause = styled.div`
  flex: 0.33;
`;

const Solution = styled.div`
  flex: 0.33;
`;

const TextH3 = styled.h3`
  margin: 0;
`;

const TextP = styled.p`
  margin: 0;
  padding: 20px;
`;
