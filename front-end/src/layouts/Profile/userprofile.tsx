import { useCurrentUser } from "hooks/useCurrent";
import Image from "next/image";
import React from "react";

type Props = {};

function UserProfile({}: Props) {
  const user = useCurrentUser();
  return (
    <div className="card w-[30rem] py-10 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <div className="avatar online">
          <div className="w-40 rounded-full">
            <Image
              width={"160px"}
              height={"160px"}
              src="https://placeimg.com/80/80/people"
            />
          </div>
        </div>
      </figure>

      <div className="card-body font-space items-center text-center">
        <h2 className="card-title">{user?.name}</h2>
        <h2 className="">{user?.email}</h2>
        <p>If a dog chews shoes whose sh?oes does he choose?</p>
        <div className="card-actions mt-5">
          <button className="btn btn-primary">Show Me My Orders</button>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
