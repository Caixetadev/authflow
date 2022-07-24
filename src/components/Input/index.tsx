import { Dispatch, SetStateAction } from "react";

import * as S from "./styles";

export function Input({
  type,
  label,
  Icon,
  alt,
  setStateAction,
  setShowPassword,
}: {
  type: string;
  label: string;
  Icon?: any;
  alt: string;
  setStateAction: Dispatch<SetStateAction<string>>;
  setShowPassword?: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <S.Container>
      <S.Input
        type={type}
        required
        onChange={(e) => setStateAction(e.target.value)}
      />
      {Icon && (
        <S.Image
          src={Icon.src}
          alt={alt}
          onClick={() => setShowPassword && setShowPassword((prev) => !prev)}
        />
      )}
      <S.Label>{label}</S.Label>
    </S.Container>
  );
}
