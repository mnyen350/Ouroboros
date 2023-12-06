import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../../StateContextProvider";
import Alert from "../AlertComponent";


function Profile() {
    const navigate = useNavigate();
    const { user, updateUser } = useStateContext();
    //console.log(user);

    //console.log(_firstName, _lastName);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState(user.email);
    const [alertMessage, setAlertMessage] = useState('');

    useEffect(() => {

        if (!user._id) return;
        //console.log(user);

        const nameParts = user
            .name
            .split(' ')
            .filter(s => s.length > 0);

        //console.log(nameParts);

        const _lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : '';
        const _firstName = nameParts.length > 1 ? nameParts.slice(0, -1).join(' ') : nameParts[0];

        setFirstName(_firstName);
        setLastName(_lastName);

    }, [user]);

    //console.log(user);
    async function saveClick() {
        try {
            const result = await updateUser({
                name: `${firstName} ${lastName}`,
                email
            });
            //console.log(result);
            setAlertMessage("Information updated.")
        }
        catch (ex) {
            console.log(ex);
            setAlertMessage(ex.toString());
        }
    }


    return (
        <>


            <form className="m-5">
                <div className="row mb-3">

                    <label htmlFor="firstname" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-5">
                        <input type="text" className="form-control" id="firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)} disabled={false} />
                    </div>
                    <div className="col-sm-5">
                        <input type="text" className="form-control" id="lastname" value={lastName} onChange={(e) => setLastName(e.target.value)} disabled={false} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" value={email} onChange={(e) => setEmail(e.target.value)} disabled={false} />
                    </div>
                </div>

                <Alert message={alertMessage} />

                <div className="mt-5 d-grid gap-2 col-6 mx-auto">

                    <button className="btn btn-primary" type="button" onClick={() => saveClick()}>Save</button>
                </div>
            </form>
        </>
    );
}

export default Profile;