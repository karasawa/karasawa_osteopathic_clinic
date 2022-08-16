import type { NextPage, GetServerSideProps } from "next";
import Layout from "../components/Layout";
import styled from "styled-components";
import { getAllReservations } from "../lib/reservation";
import ReservationCard from "../components/molecules/ReservationCard";
import { TextField } from "@mui/material";
import { useState } from "react";

type Props = {
  reservations: [
    {
      id: string;
      username: string;
      email: string;
      phone_number: string;
      reservation_date: string;
      start_time: string;
      finish_time: string;
      created_at: Date;
    }
  ];
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const reservations = await getAllReservations();
  return {
    props: {
      reservations,
    },
  };
};

const AdminHome: NextPage<Props> = ({ reservations }) => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [reservation_date_start, setReservation_date_start] =
    useState<string>("");
  const [reservation_date_end, setReservation_date_end] = useState<string>("");
  const [phone_number, setPhone_number] = useState<string>("");

  return (
    <Layout title="admin_home">
      <MainWrapper>
        <Search>
          <H3Text>予約状況の検索</H3Text>
          <TextField
            size="small"
            label="お名前"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={{
              marginTop: "30px",
              width: 400,
              bgcolor: "#fff",
              borderRadius: "5px",
            }}
          />
          <TextField
            size="small"
            label="予約日（自）"
            type="text"
            value={reservation_date_start}
            onChange={(e) => setReservation_date_start(e.target.value)}
            sx={{
              marginTop: "30px",
              width: 400,
              bgcolor: "#fff",
              borderRadius: "5px",
            }}
          />
          <TextField
            size="small"
            label="予約日（至）"
            type="text"
            value={reservation_date_end}
            onChange={(e) => setReservation_date_end(e.target.value)}
            sx={{
              marginTop: "30px",
              width: 400,
              bgcolor: "#fff",
              borderRadius: "5px",
            }}
          />
          <TextField
            size="small"
            label="メールアドレス"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              marginTop: "30px",
              width: 400,
              bgcolor: "#fff",
              borderRadius: "5px",
            }}
          />
          <TextField
            size="small"
            label="電話番号"
            type="text"
            value={phone_number}
            onChange={(e) => setPhone_number(e.target.value)}
            sx={{
              marginTop: "30px",
              width: 400,
              bgcolor: "#fff",
              borderRadius: "5px",
            }}
          />
        </Search>
        <Reservation>
          <ReservationHeader>
            <ReservationDate>予約日</ReservationDate>
            <StartTime>予約時間</StartTime>
            <Username>お名前</Username>
            <PhoneNumber>電話番号</PhoneNumber>
          </ReservationHeader>
          {reservations.map((reservation) => (
            <ReservationCard key={reservation.id} reservation={reservation} />
          ))}
        </Reservation>
      </MainWrapper>
    </Layout>
  );
};

export default AdminHome;

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

const Search = styled.div`
  flex: 0.4;
  height: 660px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  color: #281914;
  border: 1px solid #000;
`;

const H3Text = styled.h3`
  margin: 0;
`;

const Reservation = styled.div`
  flex: 0.5;
  height: 660px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  position: relative;
  color: #281914;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ReservationHeader = styled.div`
  width: 100%;
  height: 50px;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #281914;
  font-weight: bold;
  margin-top: 15px;
`;

const ReservationDate = styled.div`
  height: 50px;
  flex: 0.25;
`;

const StartTime = styled.div`
  height: 50px;
  flex: 0.25;
`;

const Username = styled.div`
  height: 50px;
  flex: 0.3;
`;

const PhoneNumber = styled.div`
  height: 50px;
  flex: 0.2;
`;
