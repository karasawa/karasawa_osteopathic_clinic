type ReservationFormValue = {
  username: string;
  email: string;
  phoneNumber: string;
  date: Date | null;
  time: Date | null;
};

type Reservation = {
  id: string;
  username: string;
  email: string;
  phone_number: string;
  reservation_date: string;
  reservation_time: Date;
  start_time: string;
  finish_time: string;
  created_at: Date;
};

export const createReservation = async ({
  username,
  email,
  phoneNumber,
  date,
  time,
}: ReservationFormValue) => {
  const year = await date?.getFullYear();
  let month = await date?.getMonth();
  month = (await month!) + 1;
  const day = await date?.getDate();
  const hour = await time?.getHours();
  const sub_minute = await time?.getMinutes();
  let minute = "";
  if (sub_minute === 0) {
    minute = "00";
  } else {
    minute = String(sub_minute);
  }

  await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/reservations/`),
    {
      method: "POST",
      body: JSON.stringify({
        username: username,
        email: email,
        phone_number: phoneNumber,
        reservation_date: `${year}/${month}/${day}`,
        start_time: `${hour}:${minute}`,
        finish_time: `${hour! + 1}:${minute}`,
        reservation_time: date,
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
