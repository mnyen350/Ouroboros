const BASE_API_ENDPOINT="http://localhost:3000";

const Api = {
    call: async (endpoint, method, args) => {
        let body = undefined;
        let query = '';
        method = method.toUpperCase();

        if (method == 'GET') {
            for (const key of Object.keys(args ?? {})) {
                const value = args[key];
                query += `${key}=${encodeURIComponent(value)}&`;
            }
        }
        else {
            body = JSON.stringify(args)
        }

        const url = `${BASE_API_ENDPOINT}/${endpoint}?${query}`;
        //console.log(url);

        const response = await fetch(url, {
            method: method,
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: body
        });

        const content = await response.json();
        //console.log(content);

        return content;
    },
    test: async () => {
        return await Api.call('test', 'GET');
    },
    signin: async (email, password) => {
        return await Api.call('auth/signin', 'POST', { email, password });
    },
    signout: async () => {
        return await Api.call('auth/signout', 'GET');
    },
    fetchUser: async(userId = 0) => {
        return await Api.call(`api/users/${userId}`, 'GET');
    },
    updateUser: async (userId, { name, email, password }) => {
        return await Api.call(`api/users/${userId}`, 'PUT', { name, email, password });
    },
    createUser: async (name, email, password) => {
        return await Api.call(`api/users/`, 'POST', {name, email, password });
    },
    createTicket: async (userId, title, urgency, description) =>{
        return await Api.call(`api/tickets/`, 'POST', {userId, title, urgency, description});
    },
    getTickets: async ({title, getAll, userId}) =>{
        return await Api.call(`api/tickets/`, 'GET', {title, getAll, userId});
    },
    deleteTicket: async (id) =>{
        return await Api.call(`api/tickets/${id}`, 'DELETE');
    },
    deleteAllTickets: async () =>{
        return await Api.call(`api/tickets/`, 'DELETE');
    }
};

export default Api;

