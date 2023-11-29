import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useStateContext } from '../StateContextProvider';


function Urgency({ value, children }) {
    let color = "secondary";

    switch (value.toLowerCase()) {
        case "low":
            color = "secondary";
            break;
        case "medium":
            color = "warning";
            break;
        case "high":
            color = "danger";
            break;
    }

    return (
        <>
            <span className={`badge rounded-pill text-bg-${color}`}>{children}</span>
        </>
    );
}

function Ticket({ _id, title, created, urgency, description, onDelete }) {

    const {deleteTicket} = useStateContext();

    async function deleteTicketClick(){
        //console.log(_id);
        const res = await deleteTicket(_id);
        if (res.success) {
            onDelete();
        }
        return res; 
    }

    return (
        <>
            <div className="row">
                <div className="col-4">
                    <span className="d-block">
                        <Urgency value={urgency}>
                            {created.toDateString()}
                        </Urgency>
                    </span>
                    <span className="d-block">{title}</span>
                </div>
                <div className="col-7">
                    {description}
                </div>
                <div className="col-1">
                    <a href={void (0)} className="btn btn-sm btn-danger" onClick={()=>deleteTicketClick()}>
                        <FontAwesomeIcon icon={['fas', 'x']} />
                    </a>
                </div>
            </div>
        </>
    );
}

export default Ticket;