import { signOut } from "firebase/auth";
import { LOGO } from "../utils/constant";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const signOutMethod = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error,"Something went wrong")
      });
  };
  return (
    <div className="absolute px-8 py-2 z-10 bg-gradient-to-b from-black  w-screen flex justify-between">
      <img className="w-44" src={LOGO} alt="logo" />
      {
        user && <div className="flex p-2">
        <img
          src="https://occ-0-6071-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXYofKdCJceEP7pdxcEZ9wt80GsxEyXIbnG_QM8znksNz3JexvRbDLr0_AcNKr2SJtT-MLr1eCOA-e7xlDHsx4Jmmsi5HL8.png?r=1d4"
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
