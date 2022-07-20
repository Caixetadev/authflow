import { useDispatch } from "react-redux";

import { authLogin } from "../../app/login";
import { AppDispatch } from "../../app/store";

export function Login() {
  const dispatch: AppDispatch = useDispatch();

  return (
    <button
      onClick={() =>
        dispatch(authLogin({ username: "teste", password: "teste" }))
      }
    >
      login
    </button>
  );
}
