import { useEffect } from "react";
import Signin from "../forms/Signin";
import { useStateContext } from "../../StateContextProvider";

function SigninPage() {

    const { setIsHalf, signInUser } = useStateContext();
    setIsHalf(true);

    return (
        <>
            <div className="text-center">
                <img src="/images/logo.png" alt="logo" className="logo" />
            </div>

            <div className="text-center">
                <h3>Sign In</h3>
            </div>

            <Signin { ...{ signInUser } } />
        </>
    );
}

export default SigninPage;