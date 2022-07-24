import { FormEvent, useEffect, useState } from "react";

import Mail from "../../assets/mail.svg";
import AyeOff from "../../assets/aye_off.svg";
import AyeOn from "../../assets/aye_on.svg";

import * as S from "./styles";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store";

import { Input } from "../Input";
import { Button } from "../Button";
import { BoxLogin } from "../BoxLogin";
import { authLogin, reset } from "../../store/modules/auth/auth.store";
import { toast } from "react-toastify";
import { IState } from "../../types";
import { Loading } from "../Loading";
import Link from "next/link";

export function Form() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const dispatch: AppDispatch = useDispatch();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    dispatch(authLogin({ username, password }));
  }

  const { isError, message, user, isLoading } = useSelector(
    (state: IState) => state
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(reset());
  }, [user, isError, message, dispatch]);

  return (
    <>
      <S.Form onSubmit={handleSubmit}>
        <Input
          type="text"
          label="username"
          Icon={Mail}
          alt="Icon mail"
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
        <S.ForgotPassword>Forgot password?</S.ForgotPassword>
        <BoxLogin />
        <Button withColor type="submit">
          {isLoading ? <Loading width="35" height="35" /> : "Sign in"}
        </Button>
        <Button type="button">
          <Link href="/register">Create account</Link>
        </Button>
      </S.Form>
    </>
  );
}
