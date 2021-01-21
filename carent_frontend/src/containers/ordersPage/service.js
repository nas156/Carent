import callWebApi from "../../helpers/api.helper";

export const getAllOrders = async () => {
    const response = await callWebApi({
        endpoint: "/api/orders/all",
        type: "GET"
    });
    return response.json();
};

export const createOrderRequest = async order => {
    const response = await callWebApi({
        endpoint: "/api/orders/create",
        type: "POST",
        request: order
    });
    return response.json();
};

export const deleteOrderRequest = async orderId => {
    const response = await callWebApi({
        endpoint: "/api/orders/one",
        type: "DELETE",
        query: {id: orderId}
    });
    return response.json();
};

export const getUsersPassportsRequest = async () => {
    const response = await callWebApi({
        endpoint: "/api/clients/passports",
        type: "GET"
    });
    return response.json();
};

export const getCarsNumbersRequest = async () => {
    const response = await callWebApi({
        endpoint: "/api/cars/numbers",
        type: "GET"
    });
    return response.json();
};
