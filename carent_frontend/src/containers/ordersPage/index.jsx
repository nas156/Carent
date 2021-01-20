import React, {useEffect, useState} from "react";
import {
    createOrderRoutine,
    deleteOrderRoutine,
    loadOrdersRoutine,
    loadUserNumbersAndCarNumbersRoutine
} from "./routines";
import ItemsTable from "../../components/table";
import {connect} from "react-redux";
import AddEditModal from "../../components/addOrEditModal";

const Orders = ({
                    orders, loadOrdersRoutine: load, createOrderRoutine: create,
                    deleteOrderRoutine: del, loading, deleting, creating, passportOptions,
                    numberOptions, loadingOptions, loadUserNumbersAndCarNumbersRoutine: loadOptions
                }) => {

    const [showModal, setShowModal] = useState(false);
    const [rentalTime, setRentalTime] = useState("");
    const [userPassport, setUserPassport] = useState("");
    const [carNumber, setCarNumber] = useState("");

    useEffect(() => {
        load();
    }, [load]);

    const clearState = () => {
        setShowModal(false);
        setRentalTime("");
        setUserPassport("");
        setCarNumber("");
    }

    const createCloseClick = () => {
        clearState();
    }

    const prepareOptions = (list) => (
        list.map(item => (
            { key: item, text: item, value: item }
        ))
    )


    const createApplyClick = () => {
        const newOrder = {
            "rentalTime": rentalTime,
            "userPassport": userPassport,
            "carNumber": carNumber
        };
        console.log(newOrder)
        create(newOrder);
        clearState();
    }

    const onCreateClick = () => {
        setShowModal(true);
        loadOptions();
    }

    const onDeleteClick = order => {
        del(order.id);
    }

    return (
        <div className="mainTable">
            <ItemsTable
                loading={loading}
                addButton={{"onAdd": onCreateClick, "loading": creating, "text": "Create order"}}
                columns={["Rental cost", "User passport", "Rental time(hours)", "Car number", "Date"]}
                buttons={[
                    {"name": "Delete", "click": onDeleteClick, "color": "red", "disabled": deleting},
                ]}
                content={orders}
                color="pink"
            />
            <AddEditModal
                open={showModal}
                onCloseClick={createCloseClick}
                onApplyClick={createApplyClick}
                content={{
                    "icon": "shop",
                    "title": "Create order",
                    "fields":
                        [
                            {
                                "name": "Rental time(hours)",
                                "value": rentalTime,
                                "change": setRentalTime,
                            },
                            {
                                "dropdown": true,
                                "options": prepareOptions(passportOptions),
                                "loading": loadingOptions,
                                "name": "User passport",
                                "value": userPassport,
                                "change": setUserPassport
                            },
                            {
                                "dropdown": true,
                                "options": prepareOptions(numberOptions),
                                "loading": loadingOptions,
                                "name": "Car number",
                                "value": carNumber,
                                "change": setCarNumber
                            }
                        ]
                }}
            />
        </div>
    )
}

const mapStateToProps = rootState => (
    {
        orders: rootState.orders.orders,
        loading: rootState.orders.isLoading,
        deleting: rootState.orders.isDeleting,
        creating: rootState.orders.isCreating,
        passportOptions: rootState.orders.passports,
        numberOptions: rootState.orders.numbers,
        loadingOptions: rootState.orders.loadingOptions
    }
);

const mapDispatchToProps =
    {
        loadOrdersRoutine,
        createOrderRoutine,
        deleteOrderRoutine,
        loadUserNumbersAndCarNumbersRoutine
    };


export default connect(mapStateToProps, mapDispatchToProps)(Orders);