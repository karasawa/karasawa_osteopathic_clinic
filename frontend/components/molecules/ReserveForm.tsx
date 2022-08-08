import { useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import Stack from "@mui/material/Stack";
import styled from "styled-components";

const ReserveForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [date, setDate] = useState<Date | null>(new Date());
  const [time, setTime] = useState<Date | null>(
    new Date("2018-01-01T00:00:00.000Z")
  );

  const reserve = () => {
    console.log(username);
    console.log(email);
    console.log(phoneNumber);
    console.log(date);
    console.log(time);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        <TextField
          size="small"
          label="お名前"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          size="small"
          label="メールアドレス"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          size="small"
          label="電話番号"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <DatePicker
          disableFuture
          label="予約日"
          openTo="year"
          views={["year", "month", "day"]}
          value={date}
          onChange={(newValue) => {
            setDate(newValue);
          }}
          renderInput={(params) => <TextField size="small" {...params} />}
        />
        <TimePicker
          label="予約時間"
          value={time}
          onChange={setTime}
          renderInput={(params) => <TextField size="small" {...params} />}
        />
        <ReserveButton onClick={reserve}>予約する</ReserveButton>
      </Stack>
    </LocalizationProvider>
  );
};

export default ReserveForm;

const ReserveButton = styled.button`
  padding: 10px 14px;
  margin-left: 5px;
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
