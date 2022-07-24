import { apiBackend } from "../../../service/api";

import { setCookie, parseCookies, destroyCookie } from "nookies";

import { IUser } from "../../../types";

export const login = async ({ username, password }: IUser) => {
  const { data } = await apiBackend.post("/auth", {
    username,
    password,
  });

  setCookie(undefined, "token", data.user.token);

  return data;
};

export const register = async ({ username, password }: IUser) => {
  const { data } = await apiBackend.post("/auth/register", {
    username,
    password,
  });

  setCookie(undefined, "token", data.user.token);

  return data;
};

export async function getUser() {
  const cookie = parseCookies();

  const { data } = await apiBackend.post("auth/validationToken", {
    token: cookie["token"],
  });

  return data;
}
