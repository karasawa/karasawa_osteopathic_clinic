import styled from "styled-components";
import { FC, memo } from "react";
import Link from "next/link";

export type Props = {
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
// eslint-disable-next-line react/display-name
const ReservationCard: FC<Props> = memo(({ reservation }) => {
  return (
    <Link href={`/admin_reservation/${reservation.id}`}>
      <MainWrapper>
        <ReservationDate>{reservation.reservation_date}</ReservationDate>
        <ReservationTime>
          {reservation.start_time}～{reservation.finish_time}
        </ReservationTime>
        <Username>{reservation.username}</Username>
        <PhoneNumber>{reservation.phone_number}</PhoneNumber>
      </MainWrapper>
    </Link>
  );
});

export default ReservationCard;

const MainWrapper = styled.div`
  width: 100%;
  height: 50px;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #281914;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #a6c78e;
  }
`;

const ReservationDate = styled.div`
  height: 50px;
  flex: 0.25;
`;

const ReservationTime = styled.div`
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
