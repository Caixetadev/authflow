import { apiBackend } from "../service/api";

import { IUser } from "../types";

export const login = async ({ username, password }: IUser) => {
  const response = await apiBackend.post("/auth", {
    username,
    password,
  });

  return response.data;
};
