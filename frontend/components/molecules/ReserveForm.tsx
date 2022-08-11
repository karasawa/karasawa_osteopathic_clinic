import { useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import Stack from "@mui/material/Stack";
import styled from "styled-components";
import { createReservation } from "../../lib/reservation";
import ja from "date-fns/locale/ja";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

type FormValues = {
  email: string;
  username: string;
  phoneNumber: string;
};

const schema = yup.object({
  username: yup.string().required("お名前を入力してください"),
  email: yup
    .string()
    .email("メールアドレスの形式が正しくありません")
    .required("メールアドレスを入力してください"),
  //   password: yup.string().min(8, "8文字以上で入力してください"),
  phoneNumber: yup
    .string()
    .required("電話番号を入力してください")
    .matches(/\d{2,4}-?\d{3,4}-?\d{3,4}$/, "ハイブンを含めて入力してください"),
});

const ReserveForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [date, setDate] = useState<Date | null>(new Date());
  const [time, setTime] = useState<Date | null>(
    new Date("2018-01-01T00:00:00.000Z")
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const reserve = async () => {
    const res = await createReservation({
      username,
      email,
      phoneNumber,
      date,
      time,
    });
    await console.log(res);
    setUsername("");
    setEmail("");
    setPhoneNumber("");
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ja}>
      <form onSubmit={handleSubmit(reserve)}>
        <Stack spacing={3}>
          <TextField
            size="small"
            label="お名前"
            {...register("username")}
            error={"username" in errors}
            helperText={errors.username?.message}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={{ width: 400 }}
          />
          <TextField
            size="small"
            label="メールアドレス"
            {...register("email")}
            error={"email" in errors}
            helperText={errors.email?.message}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            size="small"
            label="電話番号"
            {...register("phoneNumber")}
            error={"phoneNumber" in errors}
            helperText={errors.phoneNumber?.message}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <DatePicker
            label="予約日"
            openTo="year"
            views={["year", "month", "day"]}
            value={date}
            onChange={(newValue) => {
              setDate(newValue);
            }}
            inputFormat="yyyy年MM月dd日"
            mask="____年__月__日"
            renderInput={(params) => <TextField size="small" {...params} />}
          />
          <TimePicker
            label="予約時間"
            value={time}
            onChange={setTime}
            renderInput={(params) => <TextField size="small" {...params} />}
          />
          <ReserveButton type="submit">予約する</ReserveButton>
        </Stack>
      </form>
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
