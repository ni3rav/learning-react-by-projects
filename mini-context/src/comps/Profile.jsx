import React from "react";
import Context from "../context/Context";

const Profile = () => {
  const { user, setUser } = React.useContext(Context);
  const username = { user };
  return (
    <div>
      <button onClick>Submit</button> <br />
      <h3>Welcome, {username}</h3>
    </div>
  );
};

export default Profile;
