import Image from "next/image";

import { options } from "./options";

import * as S from "./styles";

export function BoxLogin() {
  return (
    <S.Wrapper>
      {options.map(({ image, alt }) => (
        <S.Box key={alt}>
          <Image src={image} alt={alt} />
        </S.Box>
      ))}
    </S.Wrapper>
  );
}
