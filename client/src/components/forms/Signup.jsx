import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUserContext } from "../../UserContextProvider";
import Alert from "../AlertComponent";

function Signup() {

    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('jack');
    const [lastName, setLastName] = useState('red');
    const [email, setEmail] = useState('asd@aol.com');
    const [password, setPassword] = useState('qwerty');

    const [alertMessage, setAlertMessage] = useState('');

    const { createUser } = useUserContext();

    async function createClick() {
        try {
            setAlertMessage('');
            const result = await createUser(`${firstName} ${lastName}`, email, password);
            if (!result.success) {
                setAlertMessage(result.error);
            }
            else {
                navigate("/profile");
            }
        }
        catch (ex) {
            setAlertMessage(ex.toString());
            console.log(ex);
        }
    }

    return (
        <form className="m-5">
            <div className="row mb-3">

                <label htmlFor="firstname" className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-5">
                    <input type="text" className="form-control" id="firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className="col-sm-5">
                    <input type="text" className="form-control" id="lastname" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
            </div>
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

            <Alert message={alertMessage} />

            <div className="mt-5 d-grid gap-2 col-6 mx-auto">
                <a className="btn btn-primary" type="button" onClick={() => createClick()}>Sign Up</a>
                <div>
                    <span className="me-1">Already have an account?</span>
                    <Link to="/">Sign In</Link>
                </div>
            </div>
        </form>
    );
}

export default Signup;