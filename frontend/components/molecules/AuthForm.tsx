import Link from "next/link";
import styled from "styled-components";
import { memo, useState } from "react";
import Cookie from "universal-cookie";
import { useRouter } from "next/router";
import { TextField } from "@mui/material";

const cookie = new Cookie();
// eslint-disable-next-line react/display-name
const AuthForm = memo(() => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const router = useRouter();

  const login = async () => {
    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/auth/jwt/create/`,
        {
          method: "POST",
          body: JSON.stringify({ username: username, password: password }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => {
          if (res.status === 400) {
            throw "authentication failed";
          } else if (res.ok) {
            return res.json();
          }
        })
        .then((data) => {
          const options = { path: "/" };
          cookie.set("access_token", data.access, options);
        });
      router.push("/admin_home");
    } catch (err) {
      alert(err);
    }
  };

  const authUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await login();
      } else {
        await fetch(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/register/`, {
          method: "POST",
          body: JSON.stringify({ username: username, password: password }),
          headers: {
            "Content-Type": "application/json",
          },
        }).then((res) => {
          if (res.status === 400) {
            throw "authentication failed";
          }
        });
        await login();
      }
    } catch (err) {
      alert(err);
    }
  };

  return (
    <MainContainer>
      <form style={{ height: "600px" }} onSubmit={authUser}>
        <MainWrapper>
          <H3Text>?????????????????????</H3Text>
          <SubWrapper>
            <TextField
              size="small"
              label="???????????????"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              sx={{
                background: "#fff",
                borderRadius: "5px",
              }}
            />
            <TextField
              size="small"
              label="???????????????"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                marginTop: "30px",
                background: "#fff",
                borderRadius: "5px",
              }}
            />
          </SubWrapper>
          <H5Text>
            <Link href="#">
              <A>?????????????????????????????????????????????</A>
            </Link>
          </H5Text>
          <Button type="submit">{isLogin ? "????????????" : "????????????"}</Button>
        </MainWrapper>
      </form>
    </MainContainer>
  );
});

export default AuthForm;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30%;
  height: 600px;
  margin: 0 auto;
  font-family: "Shippori Mincho", serif;
  height: 100vh;
`;

const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainContainer = styled.div`
  height: 600px;
  height: 100vh;
`;

const Button = styled.button`
  padding: 10px;
  border-radius: 3px;
  border: none;
  color: #fff;
  cursor: pointer;
  outline: none;
  background-color: #281914;
  font-family: "Shippori Mincho", serif;
  &:hover {
    background-color: #74905d;
  }
`;

const H3Text = styled.h3`
  text-align: center;
  font-size: 25px;
`;

const H5Text = styled.h5`
  text-align: right;
  cursor: pointer;
  color: #281914;
`;

const A = styled.a`
  cursor: pointer;
  color: #281914;
  &:hover {
    color: #74905d;
  }
`;
