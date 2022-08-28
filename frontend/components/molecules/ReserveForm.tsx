import { Fragment, useState, FC, memo } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Stack from "@mui/material/Stack";
import styled from "styled-components";
import { createReservation } from "../../lib/reservation";
import ja from "date-fns/locale/ja";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { SnackbarOrigin } from "@mui/material/Snackbar";
import SnackBar from "../atoms/SnackBar";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import type { Week } from "../organisms/Header";
import FormHelperText from "@mui/material/FormHelperText";

export interface State extends SnackbarOrigin {
  open: boolean;
}

type FormValues = {
  email: string;
  username: string;
  phoneNumber: string;
  date: string;
  time: string;
};

type Props = {
  week: Week[];
};

const schema = yup.object({
  username: yup.string().required("お名前を入力してください"),
  email: yup
    .string()
    .email("メールアドレスの形式が正しくありません")
    .required("メールアドレスを入力してください"),
  phoneNumber: yup
    .string()
    .required("電話番号を入力してください")
    .matches(/\d{2,4}-\d{3,4}-\d{3,4}/, "ハイブンを含めて入力してください"),
  date: yup.string().required("予約日を選択してください"),
  time: yup.string().required("予約時間を選択してください"),
});
// eslint-disable-next-line react/display-name
const ReserveForm: FC<Props> = memo(({ week }) => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [state, setState] = useState<State>({
    open: false,
    vertical: "top",
    horizontal: "left",
  });

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
    setDate("");
    setTime("");
    setState({ ...state, open: true });
  };

  console.log(date);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ja}>
      <Fragment>
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
            <FormControl fullWidth size="small">
              <InputLabel>予約日</InputLabel>
              <Select
                {...register("date")}
                error={"date" in errors}
                value={date}
                label="予約日"
                onChange={(e) => setDate(e.target.value)}
              >
                {week.map((oneDay) => {
                  if (oneDay.day === "日") {
                    return <></>;
                  } else {
                    return (
                      <MenuItem
                        key={oneDay.date}
                        value={`${oneDay.date}（$（${oneDay.day}）`}
                      >
                        {oneDay.date}（{oneDay.day}）
                      </MenuItem>
                    );
                  }
                })}
              </Select>
              <FormHelperText sx={{ color: "#D95555" }}>
                {errors.date?.message}
              </FormHelperText>
            </FormControl>
            <FormControl fullWidth size="small">
              <InputLabel>予約時間</InputLabel>
              {date.indexOf("土") !== -1 ? (
                <Select
                  {...register("time")}
                  error={"time" in errors}
                  value={time}
                  label="予約時間"
                  onChange={(e) => setTime(e.target.value)}
                >
                  <MenuItem value={"9"}>9:00</MenuItem>
                  <MenuItem value={"10"}>10:00</MenuItem>
                  <MenuItem value={"11"}>11:00</MenuItem>
                </Select>
              ) : (
                <Select
                  {...register("time")}
                  error={"time" in errors}
                  value={time}
                  label="予約時間"
                  onChange={(e) => setTime(e.target.value)}
                >
                  <MenuItem value={"9"}>9:00</MenuItem>
                  <MenuItem value={"10"}>10:00</MenuItem>
                  <MenuItem value={"11"}>11:00</MenuItem>
                  <MenuItem value={"15"}>15:00</MenuItem>
                  <MenuItem value={"16"}>16:00</MenuItem>
                  <MenuItem value={"17"}>17:00</MenuItem>
                  <MenuItem value={"18"}>18:00</MenuItem>
                </Select>
              )}
              <FormHelperText sx={{ color: "#D95555" }}>
                {errors.time?.message}
              </FormHelperText>
            </FormControl>
            <ReserveButton type="submit">予約する</ReserveButton>
          </Stack>
        </form>
        <SnackBar state={state} setState={setState} />
      </Fragment>
    </LocalizationProvider>
  );
});

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
