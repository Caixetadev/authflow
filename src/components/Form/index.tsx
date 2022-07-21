import { Input } from "../Input";

import Mail from "../../assets/mail.svg";
import AyeOff from "../../assets/aye_off.svg";

import * as S from "./styles";
import { Button } from "../Button";
import { BoxLogin } from "../BoxLogin";

export function Form() {
  return (
    <S.Form>
      <Input type="text" label="Type your e-mail" Icon={Mail} alt="Icon mail" />
      <Input
        type="password"
        label="Type your password"
        Icon={AyeOff}
        alt="Icon eye"
      />
      <S.ForgotPassword>Forgot password?</S.ForgotPassword>
      <BoxLogin />
      <Button withColor type="submit">
        Sign in
      </Button>
      <Button type="button">Create account</Button>
    </S.Form>
  );
}
