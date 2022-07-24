import type { NextPage } from "next";
import { parseCookies } from "nookies";
import { useEffect } from "react";

import { Form, Title } from "../components";
import { useAppDispatch } from "../store";
import { authToken, reset } from "../store/modules/auth/auth.store";

const Home: NextPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const cookie = parseCookies();

    if (cookie["token"]) {
      dispatch(authToken());
    } else {
      dispatch(reset());
    }
  }, [dispatch]);

  return (
    <>
      <Title>Sign in</Title>
      <Form />
    </>
  );
};

export default Home;
