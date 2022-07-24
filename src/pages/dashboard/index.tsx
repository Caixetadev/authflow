import { useSelector } from "react-redux";

import { signOut, useSession } from "next-auth/react";
import { IState } from "../../types";
import Image from "next/image";

function Dashboard() {
  const { data } = useSession();

  const { user } = useSelector((state: IState) => state);

  return (
    <>
      <Image
        width={100}
        height={100}
        src={(data?.user?.image as string) || user.user?.photo}
        alt="Image of Profile"
      />
      <button onClick={() => signOut()}>Logout</button>
    </>
  );
}

export default Dashboard;
