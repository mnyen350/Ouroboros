import { useState, useMemo, useEffect, createContext, useContext } from "react";
import Api from "./api";

const StateContext = createContext({});

function useStateContext() {
    return useContext(StateContext);
}

function StateContextProvider({ children }) {
    const [user, setUser] = useState({});
    const [isHalf, setIsHalf] = useState(false);

    async function signInUser(email, password) {
        const res = await Api.signin(email, password);
        if (res.success) {
            setUser(res.result);
        }
        return res;
    }

    async function signOutUser() {
        await Api.signout();
        setUser({});
    }

    async function updateUser({ name, email, password }) {
        const res = await Api.updateUser(user._id, { name, email, password });
        if (res.success) {
            setUser(res.result);
        }
        return res;
    }

    async function createUser(name, email, password) {
        const res = await Api.createUser(name, email, password);
        if (res.success) {
            setUser(res.result);
        }
        return res;
    }
    async function createTicket(title, urgency, description) {
        const res = await Api.createTicket(user._id, title, urgency, description);
        return res;
    }

    async function deleteTicket(id){
        const res = await Api.deleteTicket(id);
        return res;
    }

    async function getTickets(title = '') {
        const res = await Api.getTickets({ title, userId: user._id });
        if (res.success) {
            res.result = res.result.map(o => ({
                ...o,
                created: new Date(o.created),
                updated: new Date(o.updated)
            }));
        }
        return res;
    }

    const values = useMemo(() => {
        return {
            // layout
            isHalf,
            setIsHalf: (value) => useEffect(() => setIsHalf(value)),
            // user
            user,
            signInUser,
            signOutUser,
            updateUser,
            createUser,
            // ticket
            createTicket,
            getTickets,
            deleteTicket
        }
    }, [isHalf, user]);

    return (
        <StateContext.Provider value={values}>
            {children}
        </StateContext.Provider>
    )
}

export {
    StateContext,
    StateContextProvider,
    useStateContext
};