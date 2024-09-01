import { useRef, useState } from "react"
import Header from "./Header"
import { checkValidateData } from "../utils/validate";

const Login = () => {
    const [isSignInForm, setisSignInForm] = useState(true);
    const [errMessage, setErrMessage] = useState(null)

    const toggleSignInForm = () => {
        setisSignInForm(!isSignInForm)
    }

    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {

        const message = checkValidateData(email.current.value , password.current.value);
        setErrMessage(message)
    }
    return (
        <div>
            <Header />
            <div className="absolute p-0 m-0 bg-cover">
                <img className="object-cover"
                 src="https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_large.jpg"
                    alt="logo"
                />
            </div>

            <form 
            onSubmit={(e) => e.preventDefault()}
            className="absolute mx-auto p-12  w-3/12 right-0 left-0 bg-black rounded-lg bg-opacity-80">
                <h1 className=" font-bold text-3xl py-4">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>
                {!isSignInForm &&
                    (<input type="text" placeholder="Your Name" className="p-2 my-4 w-full bg-gray-700 rounded-lg" />)}
                <input
                    ref={email}
                    type="text"
                    placeholder="Email Address"
                    className="p-2 my-4 w-full bg-gray-700 rounded-lg" />
                <input
                    ref={password}
                    type="text"
                    placeholder="Password"
                    className="p-2 my-4 w-full bg-gray-700 rounded-lg" />
                    <p className="text-red-500">{errMessage}</p>
                <button
                    className="p-4 my-6 bg-red-700 w-full rounded-lg"
                    onClick={handleButtonClick}>
                    {isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className="py-4 cursor-pointer"
                    onClick={toggleSignInForm}>
                    {isSignInForm ? "New to netflix , Sign up now" : " Already a member, Sign In Now"} </p>
            </form>
        </div>
    )
}

export default Login