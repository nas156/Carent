import callWebApi from "../../helpers/api.helper";

export const loginRequest = async loginData => {
    const response = await callWebApi({
        endpoint: "/api/auth/login",
        type: "POST",
        skipAuthorization: true,
        request: loginData
    });
    return response.json();
};

export const registerRequest = async registerData => {
    const response = await callWebApi({
        endpoint: "/api/auth/register",
        type: "POST",
        skipAuthorization: true,
        request: registerData
    });
    return response.json();
};

export const getUserRequest = async () => {
    try {
        const response = await callWebApi({
            endpoint: "/api/user",
            type: "GET",
        });
        return response.json();
    } catch (e) {
        return null;
    }
};