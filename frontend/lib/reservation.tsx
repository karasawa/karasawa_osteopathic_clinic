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

  const startTimeNum = Number(time);
  const finishTimeNum = startTimeNum + 1;
  let startTimeStr = String(startTimeNum);
  if (time.length === 1) {
    startTimeStr = "0" + startTimeStr;
  }
  const finishTimeStr = String(finishTimeNum);
  const startTime = startTimeStr + ":00";
  const finishTime = finishTimeStr + ":00";

  const removeIndex = await date.indexOf("（");
  const dayRemovedDate = await date.slice(0, removeIndex);
  const dateIndex = await dayRemovedDate.indexOf("/");
  let reservationDateM = await dayRemovedDate.slice(0, dateIndex);
  let reservationDateD = await dayRemovedDate.slice(
    dateIndex + 1,
    dayRemovedDate.length
  );

  if (reservationDateM.length === 1) reservationDateM = "0" + reservationDateM;

  if (reservationDateD.length === 1) reservationDateD = "0" + reservationDateD;

  await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/reservations/`),
    {
      method: "POST",
      body: JSON.stringify({
        username: username,
        email: email,
        phone_number: phoneNumber,
        reservation_date: `${thisYear}/${reservationDateM}/${reservationDateD}`,
        start_time: startTime,
        finish_time: finishTime,
        reservation_time: `${thisYear}${reservationDateM}${reservationDateD}${startTimeStr}`,
        reservation_date_sub: `${thisYear}/${dayRemovedDate}`,
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

export const getHolidays = async () => {
  const res = await fetch(
    new URL("https://holidays-jp.github.io/api/v1/date.json")
  );
  const holidays = await res.json();
  return holidays;
};
