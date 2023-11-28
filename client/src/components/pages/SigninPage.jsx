import Signin from "../forms/Signin";

function SigninPage({ setIsHalf, signInUser }) {

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