import { ReactNode } from "react";

import { NextShield } from "next-shield";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useSelector } from "react-redux";

import { IState } from "../../types";

export function Shield({ children }: { children: ReactNode }) {
  const router = useRouter();

  const { data: isAuthenticate } = useSession();

  const { isSuccess } = useSelector((state: IState) => state);

  return (
    <NextShield
      isAuth={isAuthenticate ? true : false || isSuccess ? true : false}
      isLoading={false}
      router={router}
      privateRoutes={["/dashboard"]}
      publicRoutes={["/"]}
      accessRoute="/dashboard"
      loginRoute="/"
      LoadingComponent={<p>Loading...</p>}
    >
      {children}
    </NextShield>
  );
}
