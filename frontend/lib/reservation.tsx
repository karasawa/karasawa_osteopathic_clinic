type Reservation = {
  username: string;
  email: string;
  phoneNumber: string;
  date: Date | null;
  time: Date | null;
};

export const createReservation = async ({
  username,
  email,
  phoneNumber,
  date,
  time,
}: Reservation) => {
  const year = await date?.getFullYear();
  let month = await date?.getMonth();
  month = (await month!) + 1;
  const day = await date?.getDate();
  const hour = await time?.getHours();
  const minute = await time?.getMinutes();
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
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res) => {
    return res;
  });
};
