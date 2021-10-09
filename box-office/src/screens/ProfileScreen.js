import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/counter/userSlice";
import { auth } from "../firebase";
import Nav from "../Nav";
import PlansScreen from "./PlansScreen";
import "./ProfileScreen.css";

function ProfileScreen() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  // const signout = () => {
  //   dispatch(logout);
  //   // auth.signOut();
  // };

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className="profileScreen__details">
            <h2>{user?.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <PlansScreen />
            </div>
            <button
              className="profileScreen__signout"
              onClick={() => auth.signOut()}
            >
              Signout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
