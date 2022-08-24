type ReservationFormValue = {
  username: string;
  email: string;
  phoneNumber: string;
  date: string;
  time: string;
};

export type Reservation = {
  id: string;
  username: string;
  email: string;
  phone_number: string;
  reservation_date: string;
  reservation_time: Date;
  start_time: string;
  finish_time: string;
  created_at: string;
};

export const createReservation = async ({
  username,
  email,
  phoneNumber,
  date,
  time,
}: ReservationFormValue) => {
  const thisYear = await new Date().getFullYear();

  const timeIndex = await time.indexOf(":");
  let finishTimeNum = await time.slice(0, timeIndex);
  const finishTime = (await String(Number(finishTimeNum) + 1)) + ":00";
  if (finishTimeNum.length === 1) finishTimeNum = "0" + finishTimeNum;

  const dateIndex = await date.indexOf("（");
  const reservationDate = await date.slice(0, dateIndex);

  const reservationDateIndex = await date.indexOf("/");
  let reservationDateNumM = await reservationDate.slice(
    0,
    reservationDateIndex
  );
  if (reservationDateNumM.length === 1)
    reservationDateNumM = "0" + reservationDateNumM;

  let reservationDateNumD = await reservationDate.slice(
    reservationDateIndex + 1,
    reservationDate.length
  );
  if (reservationDateNumD.length === 1)
    reservationDateNumD = "0" + reservationDateNumD;

  await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/reservations/`),
    {
      method: "POST",
      body: JSON.stringify({
        username: username,
        email: email,
        phone_number: phoneNumber,
        reservation_date: `${thisYear}/${reservationDate}`,
        start_time: time,
        finish_time: finishTime,
        reservation_time: `${thisYear}${reservationDateNumM}${reservationDateNumD}${finishTimeNum}`,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res) => {
    return res;
  });
};

export const getAllReservations = async () => {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-reservation/`)
  );
  const reservations = await res.json();
  const sortedReservations = reservations.sort(
    (a: Reservation, b: Reservation) => {
      if (b.reservation_time < a.reservation_time) {
        return 1;
      } else {
        return -1;
      }
    }
  );
  return sortedReservations;
};

export const getAllReservationIds = async () => {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-reservation/`)
  );
  const reservations = await res.json();
  return reservations.map((reservation: Reservation) => {
    return {
      params: {
        id: String(reservation.id),
      },
    };
  });
};

export const getReservation = async (id: string) => {
  const res = await fetch(
    new URL(
      `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/detail-reservation/${id}`
    )
  );
  const reservation = await res.json();
  return reservation;
};

export const searchReservation = async (
  username: string,
  email: string,
  reservation_date: string,
  phone_number: string
) => {
  const res = await fetch(
    new URL(
      `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-reservation/?username=${username}&email=${email}&reservation_date=${reservation_date}&phone_number=${phone_number}`
    )
  );
  const reservations = await res.json();
  const sortedReservations = reservations.sort(
    (a: Reservation, b: Reservation) => {
      if (b.reservation_time < a.reservation_time) {
        return 1;
      } else {
        return -1;
      }
    }
  );
  return sortedReservations;
};

export const deleteReservation = async (id: string) => {
  await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/reservations/${id}`),
    {
      method: "DELETE",
      body: JSON.stringify({
        id: id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res) => {
    return res;
  });
};
