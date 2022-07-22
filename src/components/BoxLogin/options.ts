import LogoGithub from "../../assets/logoGithub.svg";
import LogoLinkedin from "../../assets/logoLinkedin.svg";
import LogoGoogle from "../../assets/logoGoogle.svg";

import { signIn } from "next-auth/react";

export const options = [
  {
    image: LogoGoogle,
    alt: "Logo google",
    signIn: () => signIn("google"),
  },
  {
    image: LogoLinkedin,
    alt: "Icon apple",
    signIn: () => signIn("linkedin"),
  },
  {
    image: LogoGithub,
    alt: "Logo github",
    signIn: () => signIn("github"),
  },
];
