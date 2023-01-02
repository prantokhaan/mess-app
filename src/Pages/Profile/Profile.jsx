import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";

const Profile = () => {
  let location = window.location.origin;
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);

  return (
    <div>
      {location === "http://localhost:3000" ? (
        <div>
          <NavBar />
          <h3 className="text-center mt-5 pt-5 text-success">
            Hey {user.username}! Your Profile section is coming soon.
          </h3>
          <Link to={`/editPassword/${user._id}`}>
            <button className="memberButton">Edit Password</button>
          </Link>
        </div>
      ) : (
        <div>
          <NavBar />
          <h2>nothing</h2>
        </div>
      )}
    </div>
  );
};

export default Profile;
