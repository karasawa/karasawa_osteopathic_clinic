import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import styled, { keyframes } from "styled-components";
import Link from "next/link";
import BurgerMenu from "../molecules/BurgerMenu";
import { useEffect, memo, useState } from "react";
import TellDialog from "../molecules/TellDialog";
import ReserveDialog from "../molecules/ReserveDialog";
import { useRouter } from "next/router";
import Cookie from "universal-cookie";

export type Week = {
  date: string;
  day: string;
  holiday: string;
};

const cookie = new Cookie();
// eslint-disable-next-line react/display-name
const Header = memo(() => {
  const [tellOpen, setTellOpen] = useState<boolean>(false);
  const [reserveOpen, setReserveOpen] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [week, setWeek] = useState<Week[]>([]);
  const [reservationCount1, setReservationCount1] = useState<number[]>([]);
  const [reservationCount2, setReservationCount2] = useState<number[]>([]);
  const [reservationCount3, setReservationCount3] = useState<number[]>([]);
  const [reservationCount4, setReservationCount4] = useState<number[]>([]);
  const [reservationCount5, setReservationCount5] = useState<number[]>([]);
  const [reservationCount6, setReservationCount6] = useState<number[]>([]);
  const [reservationCount7, setReservationCount7] = useState<number[]>([]);
  const router = useRouter();

  const logout = () => {
    cookie.remove("access_token", { path: "/" });
    router.push("/admin_login");
  };

  const openReserveDialog = async () => {
    var today = await new Date();
    for (var i = 0; i < 7; i++) {
      const JapaneseHolidays = require("japanese-holidays");
      const holiday = JapaneseHolidays.isHoliday(today);
      const date = today.getMonth() + 1 + "/" + today.getDate();
      const day = today.getDay();
      const dayStr = ["日", "月", "火", "水", "木", "金", "土"][day];
      await week.push({ date: date, day: dayStr, holiday: holiday });
      await today.setDate(today.getDate() + 1);
    }
    const thisYear = await new Date().getFullYear();
    for (var i = 0; i < week.length; i++) {
      if (week[i].day === "日" || week[i].holiday) {
        reservationCount1.push(-1);
        continue;
      }
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-reservation/?reservation_date_sub=${thisYear}/${week[i].date}&start_time=09:00`
      );
      const reservation = await res.json();
      await reservationCount1.push(reservation.length);
    }
    for (var i = 0; i < week.length; i++) {
      if (week[i].day === "日" || week[i].holiday) {
        reservationCount2.push(-1);
        continue;
      }
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-reservation/?reservation_date_sub=${thisYear}/${week[i].date}&start_time=10:00`
      );
      const reservation = await res.json();
      await reservationCount2.push(reservation.length);
    }
    for (var i = 0; i < week.length; i++) {
      if (week[i].day === "日" || week[i].holiday) {
        reservationCount3.push(-1);
        continue;
      }
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-reservation/?reservation_date_sub=${thisYear}/${week[i].date}&start_time=11:00`
      );
      const reservation = await res.json();
      await reservationCount3.push(reservation.length);
    }
    for (var i = 0; i < week.length; i++) {
      if (week[i].day === "日" || week[i].day === "土" || week[i].holiday) {
        reservationCount4.push(-1);
        continue;
      }
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-reservation/?reservation_date_sub=${thisYear}/${week[i].date}&start_time=15:00`
      );
      const reservation = await res.json();
      await reservationCount4.push(reservation.length);
    }
    for (var i = 0; i < week.length; i++) {
      if (week[i].day === "日" || week[i].day === "土" || week[i].holiday) {
        reservationCount5.push(-1);
        continue;
      }
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-reservation/?reservation_date_sub=${thisYear}/${week[i].date}&start_time=16:00`
      );
      const reservation = await res.json();
      await reservationCount5.push(reservation.length);
    }
    for (var i = 0; i < week.length; i++) {
      if (week[i].day === "日" || week[i].day === "土" || week[i].holiday) {
        reservationCount6.push(-1);
        continue;
      }
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-reservation/?reservation_date_sub=${thisYear}/${week[i].date}&start_time=17:00`
      );
      const reservation = await res.json();
      await reservationCount6.push(reservation.length);
    }
    for (var i = 0; i < week.length; i++) {
      if (week[i].day === "日" || week[i].day === "土" || week[i].holiday) {
        reservationCount7.push(-1);
        continue;
      }
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-reservation/?reservation_date_sub=${thisYear}/${week[i].date}&start_time=18:00`
      );
      const reservation = await res.json();
      await reservationCount7.push(reservation.length);
    }
    await setReserveOpen(true);
  };

  let ButtonComponent;
  if (typeof cookie.get("access_token") !== "undefined") {
    ButtonComponent = (
      <ButtonWrapper>
        <LogoutButton onClick={logout}>ログアウト</LogoutButton>
      </ButtonWrapper>
    );
  } else {
    ButtonComponent = (
      <ButtonWrapper>
        <TellButton onClick={() => setTellOpen(true)}>電話する</TellButton>
        <ReserveButton onClick={openReserveDialog}>予約する</ReserveButton>
      </ButtonWrapper>
    );
  }

  useEffect(() => {
    const menuWrap = document.querySelector(".bm-menu-wrap");
    if (menuWrap) {
      menuWrap.setAttribute("aria-hidden", "true");
    }
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          bgcolor: "#B4CF9E",
          zIndex: 10,
          border: "1px solid #281914",
          borderBottom: "none",
          boxShadow: "0",
        }}
      >
        <Toolbar sx={{ height: "55px" }}>
          <MainWrapper>
            {ButtonComponent}
            <TitleWrapper>
              <Link
                href={
                  typeof cookie.get("access_token") !== "undefined"
                    ? "/admin_home"
                    : "/"
                }
              >
                <Title>柄澤整骨院</Title>
              </Link>
            </TitleWrapper>
            {typeof cookie.get("access_token") !== "undefined" ? (
              <div style={{ flex: 0.2 }}></div>
            ) : (
              <BurgerMenuWrapper>
                <BurgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
              </BurgerMenuWrapper>
            )}
          </MainWrapper>
        </Toolbar>
      </AppBar>
      <SlideMenu
        style={
          menuOpen
            ? {
                width: "300px",
              }
            : { width: 0, height: 0 }
        }
      >
        <MenuWrapper style={menuOpen ? {} : { display: "none" }}>
          <Link href="/">
            <MenuList>ホーム</MenuList>
          </Link>
          <Link href="/introduction">
            <MenuList>当院の特徴</MenuList>
          </Link>
          <Link href="/symptom">
            <MenuList>対応症状</MenuList>
          </Link>
          <Link href="#">
            <MenuList>院長紹介</MenuList>
          </Link>
          <Link href="#">
            <MenuList>FAQ</MenuList>
          </Link>
          <Link href="/access">
            <MenuList>アクセス</MenuList>
          </Link>
        </MenuWrapper>
      </SlideMenu>
      <TellDialog tellOpen={tellOpen} setTellOpen={setTellOpen} />
      <ReserveDialog
        reserveOpen={reserveOpen}
        setReserveOpen={setReserveOpen}
        week={week}
        setWeek={setWeek}
        reservationCount1={reservationCount1}
        setReservationCount1={setReservationCount1}
        reservationCount2={reservationCount2}
        setReservationCount2={setReservationCount2}
        reservationCount3={reservationCount3}
        setReservationCount3={setReservationCount3}
        reservationCount4={reservationCount4}
        setReservationCount4={setReservationCount4}
        reservationCount5={reservationCount5}
        setReservationCount5={setReservationCount5}
        reservationCount6={reservationCount6}
        setReservationCount6={setReservationCount6}
        reservationCount7={reservationCount7}
        setReservationCount7={setReservationCount7}
      />
    </Box>
  );
});

export default Header;

const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const TitleWrapper = styled.div`
  flex: 0.6;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Title = styled.h2`
  color: #281914;
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  flex: 0.2;
  display: flex;
  justify-content: start;
`;

const BurgerMenuWrapper = styled.div`
  flex: 0.2;
  display: flex;
  justify-content: end;
`;

const TellButton = styled.button`
  padding: 10px 14px;
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

const LogoutButton = styled.button`
  padding: 10px 14px;
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

const SlideMenu = styled.div`
  width: 300px;
  height: 600px;
  background-color: #000;
  position: absolute;
  z-index: 100;
  right: 0;
  opacity: 0.8;
  transition: all 0.5s ease-out;
`;

const fadeUp = keyframes`
0% {
  opacity: 0;
}
80% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 30px;
  animation: ${fadeUp} 0.5s cubic-bezier(0.33, 1, 0.68, 1) 1 forwards;
`;

const MenuList = styled.h3`
  font-size: 25px;
  color: #b4cf9e;
  cursor: pointer;
  &:hover {
    color: #547443;
  }
`;
