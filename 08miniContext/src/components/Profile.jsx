import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) return <h2>please Login</h2>;

  return (
    <div>
      <h1>welcome! {user.username}</h1>
      <p>{user.password}</p>
    </div>
  );
};

export default Profile;
