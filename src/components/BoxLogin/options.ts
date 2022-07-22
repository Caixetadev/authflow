import LogoGithub from "../../assets/logoGithub.svg";
import LogoApple from "../../assets/logoApple.svg";
import LogoGoogle from "../../assets/logoGoogle.svg";

import { signIn } from "next-auth/react";

export const options = [
  {
    image: LogoGoogle,
    alt: "Logo google",
    signIn: () => null,
  },
  {
    image: LogoApple,
    alt: "Icon apple",
    signIn: () => null,
  },
  {
    image: LogoGithub,
    alt: "Logo github",
    signIn,
  },
];
