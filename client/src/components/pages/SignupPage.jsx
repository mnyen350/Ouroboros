import Signup from "../forms/Signup";
import { useStateContext } from "../../StateContextProvider";

function SigninPage() {

    const { setIsHalf } = useStateContext();
    setIsHalf(true);

    return (
        <>
            <div className="text-center">
                <img src="/images/logo.png" alt="logo" className="logo" />
            </div>

            <div className="text-center">
                <h3>Sign Up</h3>
            </div>

            <Signup />
        </>
    );
}

export default SigninPage;