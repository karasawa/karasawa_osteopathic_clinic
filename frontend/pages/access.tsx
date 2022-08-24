import type { NextPage } from "next";
import { useMediaQuery } from "@mui/material";
import Layout from "../components/Layout";
import styled from "styled-components";
import dynamic from "next/dynamic";
import { memo, useMemo } from "react";
import BuckButton from "../components/atoms/BuckButton";
// eslint-disable-next-line react/display-name
const Access: NextPage = memo(() => {
  const Map = useMemo(
    () =>
      dynamic(() => import("../components/molecules/Map"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );

  const matches: boolean = useMediaQuery("(min-width:577px)");

  return (
    <div style={{ margin: 0, padding: 0 }}>
      {matches ? (
        <Layout title="access">
          <MainWrapper>
            <BuckButton />
            <SubWrapper>
              <MapWrapper>
                <Map />
              </MapWrapper>
              <TextWrapper>
                <Title style={{ margin: 0 }}>アクセス</Title>
                <Text>長野電鉄　信濃吉田駅より徒歩4分</Text>
                <Text>北信濃電鉄　北長野駅より徒歩5分</Text>
                <Text>
                  ※自動車・バイクでのご来院の際は、当院向かいの駐車場をご利用ください。
                </Text>
                <Title>住所・電話番号</Title>
                <Text>〒000-0000 横浜市鶴見区鶴見中央0-00-00 〇〇ビル3階</Text>
                <Text>TEL：080-1234-5678</Text>
                <Title>受付時間</Title>
                <Text>平日　9:00～12:30　/　15:00～20:00</Text>
                <Text>土曜　9:00～14:30</Text>
              </TextWrapper>
            </SubWrapper>
          </MainWrapper>
        </Layout>
      ) : (
        <Layout title="access">
          <p>aa</p>
        </Layout>
      )}
    </div>
  );
});

export default Access;

const MainWrapper = styled.div`
  width: 100%;
  height: 660px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #281914;
  background-color: #b4cf9e;
  position: relative;
  color: #281914;
`;

const SubWrapper = styled.div`
  width: 1200px;
  height: 660px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const MapWrapper = styled.div`
  flex: 0.5;
  height: 470px;
`;

const TextWrapper = styled.div`
  flex: 0.5;
  height: 470px;
  padding: 15px 15px 15px 30px;
`;

const Title = styled.h3`
  margin: 25px 0 0 0;
  font-size: 23px;
`;

const Text = styled.p`
  margin: 10px 0 0 0;
  font-size: 18px;
  padding-left: 20px;
`;
