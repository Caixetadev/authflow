import { useSelector } from "react-redux";

import { signOut, useSession } from "next-auth/react";
import { IState } from "../../types";
import Image from "next/image";
import { destroyCookie } from "nookies";
import { useAppDispatch } from "../../store";
import { reset } from "../../store/modules/auth/auth.store";

function Dashboard() {
  const { data } = useSession();

  const dispatch = useAppDispatch();

  const { user } = useSelector((state: IState) => state);

  function handleSignOut() {
    destroyCookie(undefined, "token");
    dispatch(reset());
    signOut();
  }

  return (
    <>
      <Image
        width={100}
        height={100}
        src={(data?.user?.image as string) || user.user?.photo}
        alt="Image of Profile"
      />
      <button onClick={handleSignOut}>Logout</button>
    </>
  );
}

export default Dashboard;
