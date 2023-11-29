import { useState } from "react";
import { useStateContext } from "../../StateContextProvider";
import Alert from "../AlertComponent";

function EditPassword() {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [alertMessage, setAlertMessage] = useState('');

    const { user, updateUser } = useStateContext();

    async function saveClick() {
        try {
            if (newPassword != confirmPassword) {
                throw new Error("Passwords provided do not match.");
            }

            const result = await updateUser({
                password: confirmPassword
            });

            if (!result.success){
                setAlertMessage(result.error);
            }
            else{
                setAlertMessage("Changed successfully.");
            }
            console.log(result);
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
                    <label htmlFor="inputPassword1" className="col-sm-4 col-form-label">Password</label>
                    <div className="col-sm-8">
                        <input type="password" className="form-control" id="inputPassword1" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="inputPassword2" className="col-sm-4 col-form-label">Confirm Password</label>
                    <div className="col-sm-8">
                        <input type="password" className="form-control" id="inputPassword2" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>
                </div>

                <Alert message={alertMessage}/>

                <div className="mt-5 d-grid gap-2 col-6 mx-auto">

                    <button className="btn btn-primary" type="button" onClick={() => saveClick()} >Save</button>
                </div>
            </form>
        </>
    );
}

export default EditPassword;