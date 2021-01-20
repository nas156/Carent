import callWebApi from "../../helpers/api.helper";

export const getAllUsers = async () => {
    const response = await callWebApi({
        endpoint: "/api/clients/all",
        type: "GET"
    });
    return response.json();
};

export const addUserRequest = async user => {
    const response = await callWebApi({
        endpoint: "/api/clients/add",
        type: "POST",
        request: user
    });
    return response.json();
};

export const deleteUserRequest = async userId => {
    const response = await callWebApi({
        endpoint: "/api/clients/one",
        type: "DELETE",
        query: {id: userId}
    });
    return response.json();
};

export const editUserRequest = async (userId, user) => {
    const response = await callWebApi({
        endpoint: "/api/clients/edit",
        type: "PUT",
        query: {id: userId},
        request: user
    });
    return response.json();
};