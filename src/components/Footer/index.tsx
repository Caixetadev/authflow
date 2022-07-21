import Image from "next/image";

import LogoGithub from "../../assets/logoGithub.svg";

import * as S from "./styles";

export function Footer() {
  return (
    <S.Footer>
      <S.Wrapper>
        <a
          href="https://github.com/caixetadev"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={LogoGithub} alt="Icon github" width={22} height={22} />
        </a>
        <S.AllRights>&copy; 2022 all rights reserved</S.AllRights>
      </S.Wrapper>
    </S.Footer>
  );
}
