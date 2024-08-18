import { onAuthStateChanged, signOut } from "firebase/auth";
import { LOGO, USER_ICON } from "../utils/constant";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  const signOutMethod = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error,"Something went wrong")
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid,email, displayName} = user;
          dispatch(addUser({uid,email,displayName}));
          navigate("/browse")
        } else {
          // User is signed out
          dispatch(removeUser())
          navigate("/")
        }
      });
      () => {
        unSubscribe();
      }
  },[])
  return (
    <div className="absolute px-8 py-2 z-10 bg-gradient-to-b from-black  w-screen flex justify-between">
      <img className="w-44" src={LOGO} alt="logo" />
      {
        user && <div className="flex p-2">
        <img
          src={USER_ICON}
          className="w-12 h-12 "
        />
        <button
          className="p-2 text-white font-bold text-center w-full rounded-lg"
          onClick={signOutMethod}
        >
          Sign Out
        </button>
      </div>
}
    </div>
  );
}

export default Header;
