import UserProfile from "layouts/Profile/userprofile";
import React from "react";

type Props = {};

function Profile({}: Props) {
  return (
    <div className="grid grid-cols-2  justify-items-center">
      {/* flex flex-col justify-center items-center */}
      <UserProfile />
    </div>
  );
}

export default Profile;
