import Main from "layouts/Main/Main";
import React from "react";
import Profile from "views/Profile/Profile";

type Props = {};

const ProfilePage = (props: Props) => {
  return (
    <Main>
      <Profile />
    </Main>
  );
};

export default ProfilePage;
