import callWebApi from "../../helpers/api.helper";

export const getAllCars = async () => {
    const response = await callWebApi({
        endpoint: "/api/cars/all",
        type: "GET"
    });
    return response.json();
};

export const addCarRequest = async car => {
    const response = await callWebApi({
        endpoint: "/api/cars/add",
        type: "POST",
        request: car
    });
    return response.json();
};

export const deleteCarRequest = async carId => {
    const response = await callWebApi({
        endpoint: "/api/cars/one",
        type: "DELETE",
        query: {id: carId}
    });
    return response.json();
};

export const editCarRequest = async (carId, car) => {
    const response = await callWebApi({
        endpoint: "/api/cars/edit",
        type: "PUT",
        query: {id: carId},
        request: car
    });
    return response.json();
};