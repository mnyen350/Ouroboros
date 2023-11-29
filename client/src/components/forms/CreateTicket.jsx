import { useState } from 'react';
import { useStateContext } from '../../StateContextProvider';
import Alert from "../AlertComponent";

function CreateTicket() {

    const [title, setTitle] = useState('General Ticket');
    const [urgency, setUrgency] = useState('low');
    const [desc, setDesc] = useState('');
    const descPlaceholder = `Please describe your issue here, ensure your title is relevant to the issue.\r\nHigh priority generally are health hazard or severe property damage.`;
    const [alertMessage, setAlertMessage] = useState('');

    const { user, createTicket } = useStateContext();

    async function submitClick(){
        try {
            if (!user._id) {
                throw new Error("Cannot create ticket without logging in.");
            }

            const result = await createTicket(
                title, 
                urgency,
                desc
            );

            if (!result.success){
                setAlertMessage(result.error);
            }
            else{
                setAlertMessage("Created successfully.");
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
            <div className="row mb-3">
                <div className="col-sm-7">
                    <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="col-sm-5">
                    <select className="form-select" value={urgency} onChange={(e)=>setUrgency(e.target.value)}>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>
            </div>
            <textarea value={desc} rows="4" cols="50" placeholder={descPlaceholder} onChange={(e)=>setDesc(e.target.value)} />

            <Alert message={alertMessage}/>

            <div className="d-grid gap-2 col-6 mx-auto">
                <button className="btn btn-primary" type="button" onClick={(e)=>submitClick()}>Save</button>
            </div>
        </>
    );
}

export default CreateTicket;