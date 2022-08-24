import {
  deleteReservation,
  getAllReservationIds,
  getReservation,
} from "../../lib/reservation";
import type { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "node:querystring";
import Layout from "../../components/Layout";
import styled from "styled-components";
import BuckButton from "../../components/atoms/BuckButton";
import { useRouter } from "next/router";
import { memo } from "react";

interface Params extends ParsedUrlQuery {
  id: string;
}

type Props = {
  reservation: {
    id: string;
    username: string;
    email: string;
    phone_number: string;
    reservation_date: string;
    start_time: string;
    finish_time: string;
    created_at: Date;
  };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = await getAllReservationIds();
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const reservation = await getReservation(params!.id);
  return {
    props: {
      reservation,
    },
    revalidate: 3,
  };
};
// eslint-disable-next-line react/display-name
const DetailReservation: NextPage<Props> = memo(({ reservation }) => {
  const router = useRouter();

  const remove = async () => {
    const res = await deleteReservation(reservation.id);
    router.push("/admin_home");
    console.log(res);
  };

  return (
    <Layout title={reservation.id}>
      <MainWrapper>
        <BuckButton />
        <SubWrapper>
          <Content>
            <Content1>予約日：</Content1>
            <Content2>{reservation.reservation_date}</Content2>
          </Content>
          <Content>
            <Content1>予約時間：</Content1>
            <Content2>
              {reservation.start_time}～{reservation.finish_time}
            </Content2>
          </Content>
          <Content>
            <Content1>お名前：</Content1>
            <Content2>{reservation.username}</Content2>
          </Content>
          <Content>
            <Content1>メールアドレス：</Content1>
            <Content2>{reservation.email}</Content2>
          </Content>
          <Content>
            <Content1>電話番号：</Content1>
            <Content2>{reservation.phone_number}</Content2>
          </Content>
          <DeleteButton onClick={remove}>削除する</DeleteButton>
        </SubWrapper>
      </MainWrapper>
    </Layout>
  );
});

export default DetailReservation;

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
  flex: 0.3;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 25px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
`;

const Content1 = styled.div`
  height: 100%;
  flex: 0.5;
  text-align: center;
`;

const Content2 = styled.div`
  height: 100%;
  flex: 0.5;
  text-align: center;
`;

const DeleteButton = styled.button`
  padding: 10px 14px;
  margin: 0 0 0 auto;
  width: 50%;
  border: none;
  border-radius: 10px;
  background-color: #281914;
  color: #fff;
  cursor: pointer;
  font-family: "Shippori Mincho", serif;
  &:hover {
    background-color: #74905d;
  }
`;
