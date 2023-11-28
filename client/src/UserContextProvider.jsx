import { useState, useMemo, createContext, useContext } from "react";
import Api from "./api";

const UserContext = createContext({});

function useUserContext() {
    return useContext(UserContext);
}

function UserContextProvider({ children }) {
    const [user, setUser] = useState({});

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
    async function createTicket(title, urgency, description){
        const res = await Api.createTicket(user._id, title, urgency, description);
        return res;
    }

    const values = useMemo(() => {
        return {
            user,
            signInUser,
            signOutUser,
            updateUser,
            createUser,
            createTicket
        }
    }, [user]);

    return (
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    )
}

export {
    UserContext,
    UserContextProvider,
    useUserContext
};