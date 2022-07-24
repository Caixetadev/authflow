import { useSelector } from "react-redux";

import { signOut, useSession } from "next-auth/react";
import { IState } from "../../types";

function Dashboard() {
  const { data } = useSession();

  const { user } = useSelector((state: IState) => state);

  return (
    <>
      <img
        src={(data?.user?.image as string) || user.user?.photo}
        alt="Image of Profile"
      />
      <button onClick={() => signOut()}>Logout</button>
    </>
  );
}

export default Dashboard;
