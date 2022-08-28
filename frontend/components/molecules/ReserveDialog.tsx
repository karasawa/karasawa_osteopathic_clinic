import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { FC, Dispatch, SetStateAction, useState, memo } from "react";
import styled from "styled-components";
import ClearIcon from "@mui/icons-material/Clear";
import IconButton from "@mui/material/IconButton";
import ReserveForm from "./ReserveForm";
import type { Week } from "../organisms/Header";

type Props = {
  reserveOpen: boolean;
  setReserveOpen: Dispatch<SetStateAction<boolean>>;
  week: Week[];
  setWeek: Dispatch<SetStateAction<Week[]>>;
  reservationCount1: number[];
  setReservationCount1: Dispatch<SetStateAction<number[]>>;
  reservationCount2: number[];
  setReservationCount2: Dispatch<SetStateAction<number[]>>;
  reservationCount3: number[];
  setReservationCount3: Dispatch<SetStateAction<number[]>>;
  reservationCount4: number[];
  setReservationCount4: Dispatch<SetStateAction<number[]>>;
  reservationCount5: number[];
  setReservationCount5: Dispatch<SetStateAction<number[]>>;
  reservationCount6: number[];
  setReservationCount6: Dispatch<SetStateAction<number[]>>;
  reservationCount7: number[];
  setReservationCount7: Dispatch<SetStateAction<number[]>>;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 6,
  border: "none",
  borderRadius: "6px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};
// eslint-disable-next-line react/display-name
const ReserveDialog: FC<Props> = memo(
  ({
    reserveOpen,
    setReserveOpen,
    week,
    setWeek,
    reservationCount1,
    setReservationCount1,
    reservationCount2,
    setReservationCount2,
    reservationCount3,
    setReservationCount3,
    reservationCount4,
    setReservationCount4,
    reservationCount5,
    setReservationCount5,
    reservationCount6,
    setReservationCount6,
    reservationCount7,
    setReservationCount7,
  }) => {
    const [mode, setMode] = useState<boolean>(true);
    const closeReserveDialog = async () => {
      await setWeek([]);
      await setReservationCount1([]);
      await setReservationCount2([]);
      await setReservationCount3([]);
      await setReservationCount4([]);
      await setReservationCount5([]);
      await setReservationCount6([]);
      await setReservationCount7([]);
      await setMode(true);
      await setReserveOpen(false);
    };

    return (
      <div>
        <Modal open={reserveOpen} onClose={closeReserveDialog}>
          <Box sx={style}>
            <IconButton
              onClick={closeReserveDialog}
              sx={{ position: "absolute", top: 0, right: 0 }}
            >
              <ClearIcon />
            </IconButton>
            {mode ? (
              <>
                <H3Text>ご予約情報を入力してください</H3Text>
                <ReceptionWrapper>
                  <PText>受付時間</PText>
                  <PText>平日　9:00～12:00　/　15:00～19:00</PText>
                  <PText style={{ marginBottom: "16px" }}>
                    土曜　9:00～13:00
                  </PText>
                </ReceptionWrapper>
                <ButtonWrapper>
                  <Button onClick={() => setMode(false)}>予約状況を見る</Button>
                </ButtonWrapper>
                <ReserveForm week={week} />
              </>
            ) : (
              <>
                <H3Text>直近一週間の予約状況</H3Text>
                <ReceptionWrapper>
                  <PText>受付時間</PText>
                  <PText>平日　9:00～12:00　/　15:00～19:00</PText>
                  <PText style={{ marginBottom: "16px" }}>
                    土曜　9:00～13:00
                  </PText>
                </ReceptionWrapper>
                <ButtonWrapper>
                  <Button onClick={() => setMode(true)}>
                    予約フォームへ戻る
                  </Button>
                </ButtonWrapper>
                <CalenderWrapper>
                  <CalenderTable>
                    <tr>
                      <th
                        style={{
                          textAlign: "center",
                          border: "1px solid gray",
                          fontWeight: 300,
                        }}
                      ></th>
                      {week.map((oneDay) => (
                        <>
                          <th
                            style={
                              oneDay.holiday
                                ? {
                                    border: "1px solid gray",
                                    fontWeight: 300,
                                    color: "red",
                                  }
                                : oneDay.day === "日"
                                ? {
                                    border: "1px solid gray",
                                    fontWeight: 300,
                                    color: "red",
                                  }
                                : oneDay.day === "土"
                                ? {
                                    border: "1px solid gray",
                                    fontWeight: 300,
                                    color: "blue",
                                  }
                                : {
                                    border: "1px solid gray",
                                    fontWeight: 300,
                                  }
                            }
                            key={oneDay.date}
                          >
                            {oneDay.date}（{oneDay.day}）
                          </th>
                        </>
                      ))}
                    </tr>
                    <tr>
                      <td
                        style={{
                          textAlign: "center",
                          border: "1px solid gray",
                        }}
                      >
                        9:00~
                      </td>
                      {reservationCount1.map((count) => (
                        <>
                          <td
                            style={{
                              textAlign: "center",
                              border: "1px solid gray",
                            }}
                            key={count}
                          >
                            {count >= 4
                              ? "✕"
                              : count >= 2
                              ? "△"
                              : count >= 0
                              ? "〇"
                              : "-"}
                          </td>
                        </>
                      ))}
                    </tr>
                    <tr>
                      <td
                        style={{
                          textAlign: "center",
                          border: "1px solid gray",
                        }}
                      >
                        10:00~
                      </td>
                      {reservationCount2.map((count) => (
                        <>
                          <td
                            style={{
                              textAlign: "center",
                              border: "1px solid gray",
                            }}
                            key={count}
                          >
                            {count >= 4
                              ? "✕"
                              : count >= 2
                              ? "△"
                              : count >= 0
                              ? "〇"
                              : "-"}
                          </td>
                        </>
                      ))}
                    </tr>
                    <tr>
                      <td
                        style={{
                          textAlign: "center",
                          border: "1px solid gray",
                        }}
                      >
                        11:00~
                      </td>
                      {reservationCount3.map((count) => (
                        <>
                          <td
                            style={{
                              textAlign: "center",
                              border: "1px solid gray",
                            }}
                            key={count}
                          >
                            {count >= 4
                              ? "✕"
                              : count >= 2
                              ? "△"
                              : count >= 0
                              ? "〇"
                              : "-"}
                          </td>
                        </>
                      ))}
                    </tr>
                    <tr>
                      <td
                        style={{
                          textAlign: "center",
                          border: "1px solid gray",
                        }}
                      >
                        15:00~
                      </td>
                      {reservationCount4.map((count) => (
                        <>
                          <td
                            style={{
                              textAlign: "center",
                              border: "1px solid gray",
                            }}
                            key={count}
                          >
                            {count >= 4
                              ? "✕"
                              : count >= 2
                              ? "△"
                              : count >= 0
                              ? "〇"
                              : "-"}
                          </td>
                        </>
                      ))}
                    </tr>
                    <tr>
                      <td
                        style={{
                          textAlign: "center",
                          border: "1px solid gray",
                        }}
                      >
                        16:00~
                      </td>
                      {reservationCount5.map((count) => (
                        <>
                          <td
                            style={{
                              textAlign: "center",
                              border: "1px solid gray",
                            }}
                            key={count}
                          >
                            {count >= 4
                              ? "✕"
                              : count >= 2
                              ? "△"
                              : count >= 0
                              ? "〇"
                              : "-"}
                          </td>
                        </>
                      ))}
                    </tr>
                    <tr>
                      <td
                        style={{
                          textAlign: "center",
                          border: "1px solid gray",
                        }}
                      >
                        17:00~
                      </td>
                      {reservationCount6.map((count) => (
                        <>
                          <td
                            style={{
                              textAlign: "center",
                              border: "1px solid gray",
                            }}
                            key={count}
                          >
                            {count >= 4
                              ? "✕"
                              : count >= 2
                              ? "△"
                              : count >= 0
                              ? "〇"
                              : "-"}
                          </td>
                        </>
                      ))}
                    </tr>
                    <tr>
                      <td
                        style={{
                          textAlign: "center",
                          border: "1px solid gray",
                        }}
                      >
                        18:00~
                      </td>
                      {reservationCount7.map((count) => (
                        <>
                          <td
                            style={{
                              textAlign: "center",
                              border: "1px solid gray",
                            }}
                            key={count}
                          >
                            {count >= 4
                              ? "✕"
                              : count >= 2
                              ? "△"
                              : count >= 0
                              ? "〇"
                              : "-"}
                          </td>
                        </>
                      ))}
                    </tr>
                  </CalenderTable>
                </CalenderWrapper>
              </>
            )}
          </Box>
        </Modal>
      </div>
    );
  }
);

export default ReserveDialog;

const H3Text = styled.h3`
  margin-top: 0;
  margin-bottom: 16px;
`;

const PText = styled.p`
  margin: 0;
  font-size: 13px;
`;

const ReceptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const CalenderWrapper = styled.div`
  width: 100%;
  // height: 90px;
  disyplay: flex;
  flex-direction: column;
`;

const CalenderTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  text-align: right;
`;

const Button = styled.h5`
  margin: 0 0 2px 0;
  border: none;
  color: #281914;
  cursor: pointer;
  font-family: "Shippori Mincho", serif;
  &:hover {
    color: #74905d;
  }
`;
