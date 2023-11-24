import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContextProvider";

function Signin({  }) {

    const { signInUser } = useContext(UserContext);

    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function signInClick() {
        try {
            setErrorMessage('');
            const result = await signInUser(email, password);
            if (!result.success) {
                setErrorMessage(result.error);
            }
            else {
                navigate("/profile");
            }
        }
        catch (ex) {
            console.log(ex);
            setErrorMessage(`An unexpected error has occured`);
        }
    }

    return (
        <form className="m-5">
            <div className="row mb-3">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input type="email" className="form-control" id="inputEmail3" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPassword3" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
            </div>

            {errorMessage && <div className="row mb-2 mt-3">
                <div className="col-sm-12">
                    <div className="alert alert-danger" role="alert">
                        {errorMessage}
                    </div>
                </div>
            </div>}

            <div className="d-grid gap-2 col-6 mx-auto">
                <a className="btn btn-primary" type="button" onClick={() => signInClick()}>Sign In</a>
                <div>
                    <span className="me-1">Need an account?</span>
                    <Link to="/signup">Sign Up</Link>
                </div>
            </div>
        </form>
    );
}

export default Signin;