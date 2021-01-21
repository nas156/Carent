import callWebApi from "../../helpers/api.helper";

export const getAllClients = async () => {
    const response = await callWebApi({
        endpoint: "/api/clients/all",
        type: "GET"
    });
    return response.json();
};

export const addClientRequest = async client => {
    const response = await callWebApi({
        endpoint: "/api/clients/add",
        type: "POST",
        request: client
    });
    return response.json();
};

export const deleteClientRequest = async clientId => {
    const response = await callWebApi({
        endpoint: "/api/clients/one",
        type: "DELETE",
        query: {id: clientId}
    });
    return response.json();
};

export const editClientRequest = async (clientId, client) => {
    const response = await callWebApi({
        endpoint: "/api/clients/edit",
        type: "PUT",
        query: {id: clientId},
        request: client
    });
    return response.json();
};