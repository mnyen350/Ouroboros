import CreateTicket from '../forms/CreateTicket';
import Ticket from '../Ticket';

function TicketPage({ setIsHalf }) {
    //setIsHalf(false);

    let tickets = ["hi", "mary", "bob", "blue", "reeee"];

    return (
        <>
            <div className="mt-3 d-grid gap-2 col-6 mx-auto text-center">
                <h5>Create your ticket here</h5>
                <CreateTicket />
            </div>

            <div className="mt-5 d-grid gap-2 col-6 mx-auto text-center">
                <h5>Current Ticket</h5>
                {tickets.map((t,i) => <Ticket key={i} />)}
            </div>
        </>
    );
}

export default TicketPage;