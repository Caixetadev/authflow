import Link from "next/link";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import AyeOff from "../../assets/aye_off.svg";
import AyeOn from "../../assets/aye_on.svg";
import User from "../../assets/user.svg";

import { Input, Title } from "../../components";
import { Button } from "../../components/Button";
import { Loading } from "../../components/Loading";
import { AppDispatch } from "../../store";
import {
  authRegister,
  authToken,
  reset,
} from "../../store/modules/auth/auth.store";
import { IState } from "../../types";

import * as S from "./styles";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { isError, message, isLoading, accountCreatedSuccessfully } =
    useSelector((state: IState) => state);

  const router = useRouter();

  const dispatch: AppDispatch = useDispatch();

  function passwordIsEqual() {
    if (password !== confirmPassword) return false;

    return true;
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (passwordIsEqual()) {
      dispatch(authRegister({ username, password }));
    } else {
      toast.error("As senhas não são iguais");
    }
  }

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (accountCreatedSuccessfully) {
      router.push("/");
    }

    dispatch(reset());
  }, [isError, message, dispatch, accountCreatedSuccessfully, router]);

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
      <Title>Register</Title>
      <S.Form onSubmit={handleSubmit}>
        <Input
          label="username"
          type="text"
          Icon={User}
          alt="icon of user"
          setStateAction={setUsername}
        />
        <Input
          type={showPassword ? "text" : "password"}
          label="password"
          Icon={showPassword ? AyeOn : AyeOff}
          alt="Icon eye"
          setStateAction={setPassword}
          setShowPassword={setShowPassword}
        />
        <Input
          label="confirm password"
          type="password"
          alt="icon of user"
          setStateAction={setConfirmPassword}
        />

        <S.Container>
          <Button type="submit" withColor>
            {isLoading ? <Loading width="35" height="35" /> : "Register"}
          </Button>
          <Button type="button">
            <Link href="/">back</Link>
          </Button>
        </S.Container>
      </S.Form>
    </>
  );
}

export default Register;
