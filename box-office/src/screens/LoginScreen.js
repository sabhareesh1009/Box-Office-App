import React, { useState } from "react";
import "./LoginScreen.css";
import SignUpScreen from "./SignUpScreen";
function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://st2.depositphotos.com/1186248/5577/i/950/depositphotos_55772185-stock-photo-box-office.jpg"
          alt=""
        />

        <button onClick={() => setSignIn(true)} className="loginScreen__button">
          Sign In
        </button>

        <div className="loginScreen__gradient" />

        <div className="loginScreen__body">
          {signIn ? (
            <SignUpScreen />
          ) : (
            <>
              <h1>Unlimited films, TV Programmes and more.</h1>
              <h2>Watch anywhere. Cancel at any time.</h2>
              <h3>
                Ready to watch? Enter your email to create pr restart your
                membership
              </h3>

              <div className="loginScreen__input">
                <form>
                  <input type="email" placeholder="Email" />
                  <button
                    onClick={() => setSignIn(true)}
                    className="loginScreen__getStarted"
                  >
                    GET STARTED
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
