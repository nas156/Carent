import React, {useEffect, useState} from "react";
import {addClientRoutine, deleteClientRoutine, editClientRoutine, loadClientsRoutine} from "./routines";
import ItemsTable from "../../components/table";
import {connect} from "react-redux";
import AddEditModal from "../../components/addOrEditModal";

const Clients = ({
                  clients, loadClientsRoutine: load, addClientRoutine: add,
                  deleteClientRoutine: del, editClientRoutine: edit, loading, editing, deleting, adding
              }) => {

    const [showModal, setShowModal] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [passportNumber, setPassportNumber] = useState("");
    const [addDate, setAddDate] = useState("");
    const [numberOfOrders, setNumberOfOrders] = useState("");
    const [currentId, setCurrentId] = useState("");

    useEffect(() => {
        load();
    }, [load]);

    const clearState = () => {
        setShowModal(false);
        setFirstName("");
        setLastName("");
        setAddDate("");
        setNumberOfOrders("");
        setCurrentId("");
    }

    const editCloseClick = () => {
        clearState();
    }

    const editApplyClick = () => {
        const newClient = {
            "firstName": firstName,
            "lastName": lastName,
            "numberOfOrders": numberOfOrders,
            "addDate": addDate,
            "passportNumber": passportNumber
        };
        if (currentId) {
            edit({id: currentId, client: newClient});
        } else {
            add(newClient);
        }
        clearState();
    }

    const onAddClick = () => {
        setShowModal(true);
    }

    const onDeleteClick = client => {
        del(client.id);
    }

    const onEditClick = client => {
        setCurrentId(client.id);
        setFirstName(client.firstName);
        setAddDate(client.addDate);
        setLastName(client.lastName);
        setNumberOfOrders(client.numberOfOrders);
        setPassportNumber(client.passportNumber);
        setShowModal(true);
    }

    return (
        <div className="mainTable">
            <ItemsTable
                loading={loading}
                addButton={{"onAdd": onAddClick, "loading": adding, "text":"Add client"}}
                columns={["First name", "Last name", "Passport number", "Add date", "Number of rents"]}
                buttons={[
                    {"name": "Edit", "click": onEditClick, "color": "blue", "disabled": editing},
                    {"name": "Delete", "click": onDeleteClick, "color": "red", "disabled": deleting},
                ]}
                content={clients}
                color="orange"
            />
            <AddEditModal
                open={showModal}
                onCloseClick={editCloseClick}
                onApplyClick={editApplyClick}
                content={{
                    "icon": "user",
                    "title": "Change/Add client",
                    "fields":
                        [
                            {
                                "name": "Passport number",
                                "value": passportNumber,
                                "change": setPassportNumber,
                                "blocked": Boolean(currentId)
                            },
                            {
                                "name": "Number of orders",
                                "value": numberOfOrders,
                                "change": setNumberOfOrders,
                                "blocked": true
                            },
                            {
                                "name": "First name",
                                "value": firstName,
                                "change": setFirstName,
                            },
                            {
                                "name": "Last name",
                                "value": lastName,
                                "change": setLastName,
                            },
                            {
                                "name": "Add date",
                                "value": addDate,
                                "change": setAddDate,
                                "blocked": true
                            }

                        ]
                }}
            />
        </div>
    )
}

const mapStateToProps = rootState => (
    {
        clients: rootState.clients.clients,
        loading: rootState.clients.isLoading,
        deleting: rootState.clients.isDeleting,
        editing: rootState.clients.isEditing,
        adding: rootState.clients.adding
    }
);

const mapDispatchToProps =
    {
        loadClientsRoutine,
        editClientRoutine,
        addClientRoutine,
        deleteClientRoutine
    };


export default connect(mapStateToProps, mapDispatchToProps)(Clients);