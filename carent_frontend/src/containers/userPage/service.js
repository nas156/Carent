import callWebApi from "../../helpers/api.helper";

export const getAllUsers = async () => {
    const response = await callWebApi({
        endpoint: "/api/users/all",
        type: "GET"
    });
    return response.json();
};

export const addUserRequest = async user => {
    const response = await callWebApi({
        endpoint: "/api/users/add",
        type: "POST",
        request: user
    });
    return response.json();
};

export const deleteUserRequest = async userId => {
    const response = await callWebApi({
        endpoint: "/api/users/one",
        type: "DELETE",
        query: {id: userId}
    });
    return response.json();
};

export const editUserRequest = async (userId, user) => {
    const response = await callWebApi({
        endpoint: "/api/users/edit",
        type: "PUT",
        query: {id: userId},
        request: user
    });
    return response.json();
};