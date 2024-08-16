import { useState } from "react";
import Header from "./Header";
function Login() {
    const [signIn, setSignIn] = useState(true);
    const toggleSignIn = () => {
        setSignIn(!signIn);
    }
    return (<div className="bg-gradient-to-b from-black to-black">
        <Header />
        <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/20bf1f4d-1c73-48fd-8689-310d6dd80efc/81bdc063-cb8f-4afe-8a02-a3131ca4ef5e/IN-en-20240812-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7998f3b6-63e3-424a-8328-550cf777ddce_small.jpg" alt="logo" />
        </div>
        <form className=" bg-black mx-auto right-0 left-0 px-10 py-20 absolute w-2/6 mt-64 bg-opacity-80">
            <h1 className="text-3xl font-bold text-white mb-4 "> {signIn ? "Sign In" : "Sign Up"}</h1>
            {
                signIn === false &&
                <input type="text" placeholder="Name" className="p-3 mb-4 w-full bg-black text-white placeholder-white border-white border border-t[0.5px] rounded-sm" />
            }

            <input type="text" placeholder="Email Address" className="p-3 mb-4 w-full bg-black text-white placeholder-white border-white border border-t[0.5px] rounded-sm" />
            <input type="password" placeholder="Password" className="p-3 mb-4 w-full  bg-black text-white border-white placeholder-white border bborder-t[0.5px] rounded-sm" />
            <button className="p-3  bg-red-600 text-white text-center w-full rounded-lg">{signIn ? "Sign In" : "Sign Up"}</button>
            <p className="py-2 text-white cursor-pointer" onClick={toggleSignIn}> {signIn ? "New to Netflix? SignUp Now" : "Already Registered? SignIn Now"}</p>
        </form>
    </div>);
}

export default Login;