import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
function Login() {
  const dispatch = useDispatch();
  const [signIn, setSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const toggleSignIn = () => {
    setSignIn(!signIn);
  };

  const handleClick = () => {
    const message = signIn
      ? checkValidData(email.current.value, password.current.value)
      : checkValidData(
          email.current.value,
          password.current.value,
          name.current.value
        );
    setErrorMessage(message);
    if (message) return;
    else {
      if (!signIn) {
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(user, {
              displayName: name.current.value,
            })
              .then((userRecord) => {
                const { uid, email, displayName } = auth.currentUser;
                dispatch(addUser({ uid, email, displayName }));
                // See the UserRecord reference doc for the contents of userRecord.
                console.log("Successfully updated user", userRecord.toJSON());
              })
              .catch((error) => {
                console.log("Error updating user:", error);
              });
            navigate("/browse");
            console.log(user, "SIGNED UP");
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMsg = error.message;
            setErrorMessage(errorCode + "-" + errorMsg);
          });
      } else {
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/browse");
            console.log(user, "SIGNED IN");
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMsg = error.message;
            setErrorMessage(errorCode + "-" + errorMsg);
          });
      }
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/20bf1f4d-1c73-48fd-8689-310d6dd80efc/81bdc063-cb8f-4afe-8a02-a3131ca4ef5e/IN-en-20240812-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7998f3b6-63e3-424a-8328-550cf777ddce_small.jpg"
          alt="logo"
        />
      </div>
      <div className=" bg-black mx-auto right-0 left-0 px-10 py-20 absolute w-2/6 mt-64 bg-opacity-80">
        <h1 className="text-3xl font-bold text-white mb-4 ">
          {" "}
          {signIn ? "Sign In" : "Sign Up"}
        </h1>
        {signIn === false && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="p-3 mb-4 w-full bg-black text-white placeholder-white border-white border border-t[0.5px] rounded-sm"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-3 mb-4 w-full bg-black text-white placeholder-white border-white border border-t[0.5px] rounded-sm"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 mb-4 w-full  bg-black text-white border-white placeholder-white border bborder-t[0.5px] rounded-sm"
        />
        {errorMessage && (
          <p className="text-red-700 text-sm font-bold pb-2">{errorMessage}</p>
        )}
        <button
          className="p-3  bg-red-600 text-white text-center w-full rounded-lg"
          onClick={handleClick}
        >
          {signIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-2 text-white cursor-pointer" onClick={toggleSignIn}>
          {" "}
          {signIn
            ? "New to Netflix? Sign Up Now"
            : "Already Registered? Sign In Now"}
        </p>
      </div>
    </div>
  );
}

export default Login;
