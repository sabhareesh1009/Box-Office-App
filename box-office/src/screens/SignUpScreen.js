import React, { useRef, useState } from "react";
import { auth } from "../firebase";
import "./SignUpScreen.css";

function SignUpScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const userName = useRef(null);
  const [signUpScr, setSignUpScr] = useState(null);

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser, "userrrrr");
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser, "signnnn");
      });
  };

  return (
    <div className="signupScreen">
      {console.log(signUpScr, "signupusrrrr")}
      { signUpScr ? (
        <form>
          <h1>Sign Up</h1>
          <input ref={userName} placeholder="User Name" type="text" />
          <input ref={emailRef} placeholder="Email" type="email" />
          <input ref={passwordRef} placeholder="Password" type="password" />
          <button type="submit" onClick={register}>
            Sign Up
          </button>
          <h4>
            <span className="signupScreen_gray">Already with Box Office? </span>
            <span className="signupScreen_link" onClick={() => setSignUpScr(false)}>
              Login here
            </span>
          </h4>
        </form>
      ) : (
        <form>
          <h1>Sign In</h1>
          <input ref={emailRef} placeholder="Email" type="email" />
          <input ref={passwordRef} placeholder="Password" type="password" />
          <button type="submit" onClick={signIn}>
            Sign In
          </button>
          <h4>
            <span className="signupScreen_gray">New to Box Office? </span>
            <span className="signupScreen_link" onClick={() => setSignUpScr(true)}>
              Sign Up now.
            </span>
          </h4>
        </form>
      )}
    </div>
  );
}

export default SignUpScreen;
