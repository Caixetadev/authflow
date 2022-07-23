import { ReactNode } from "react";

import * as S from "./styles";

type ButtonProps = {
  children: ReactNode;
  withColor?: boolean;
  type: "button" | "submit" | "reset" | undefined;
};

export function Button({ withColor, children, type }: ButtonProps) {
  return (
    <S.Button type={type} withColor={withColor}>
      {children}
    </S.Button>
  );
}
