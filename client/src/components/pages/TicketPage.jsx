import { useState, useEffect } from "react";
import CreateTicket from '../forms/CreateTicket';
import Ticket from '../Ticket';
import { useStateContext } from "../../StateContextProvider";

function TicketPage() {
    const [ tickets, setTickets ] = useState([]);
    const { user, setIsHalf, getTickets } = useStateContext();
    setIsHalf(false);

    async function loadTickets() {
        // if admin, get all tickets
        const res = await getTickets();
        if (res.success) {
            setTickets(res.result);
        }
    }

    // load the tickets
    useEffect(() => loadTickets() && undefined, []);

    return (
        <>
            <div className="mt-3 d-grid gap-2 col-6 mx-auto text-center">
                <h5>Create your ticket here</h5>
                <CreateTicket onSuccess={() => loadTickets()} />
            </div>

            <div className="mt-5 d-grid gap-2 col-6 mx-auto text-center">
                <h5>Current Ticket</h5>
                {tickets.map((t,i) => <Ticket key={t._id} { ...t } onDelete={() => loadTickets()} />)}
            </div>
        </>
    );
}

export default TicketPage;