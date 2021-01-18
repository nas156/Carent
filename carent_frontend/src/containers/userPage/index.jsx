import React, {useEffect, useState} from "react";
import {addUserRoutine, deleteUserRoutine, editUserRoutine, loadUsersRoutine} from "./routines";
import ItemsTable from "../../components/table";
import {connect} from "react-redux";
import AddEditModal from "../../components/addOrEditModal";

const Users = ({
                  users, loadUsersRoutine: load, addUserRoutine: add,
                  deleteUserRoutine: del, editUserRoutine: edit, loading, editing, deleting, adding
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
        const newUser = {
            "firstName": firstName,
            "lastName": lastName,
            "numberOfOrders": numberOfOrders,
            "addDate": addDate,
            "passportNumber": passportNumber
        };
        if (currentId) {
            edit({id: currentId, user: newUser});
        } else {
            add(newUser);
        }
        clearState();
    }

    const onAddClick = () => {
        setShowModal(true);
    }

    const onDeleteClick = user => {
        del(user.id);
    }

    const onEditClick = user => {
        setCurrentId(user.id);
        setFirstName(user.number);
        setAddDate(user.description);
        setLastName(user.numberOfRents);
        setNumberOfOrders(user.rentalCost);
        setShowModal(true);
    }

    return (
        <div className="mainTable">
            <ItemsTable
                loading={loading}
                addButton={{"onAdd": onAddClick, "loading": adding}}
                columns={["First name", "Last name", "Passport number", "Add date", "Number of rents"]}
                buttons={[
                    {"name": "Edit", "click": onEditClick, "color": "blue", "disabled": editing},
                    {"name": "Delete", "click": onDeleteClick, "color": "red", "disabled": deleting},
                ]}
                content={users}
                color="orange"
            />
            <AddEditModal
                open={showModal}
                onCloseClick={editCloseClick}
                onApplyClick={editApplyClick}
                content={{
                    "icon": "user",
                    "title": "Change user",
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
                                "disabled": true
                            }

                        ]
                }}
            />
        </div>
    )
}

const mapStateToProps = rootState => (
    {
        users: rootState.users.users,
        loading: rootState.users.isLoading,
        deleting: rootState.users.isDeleting,
        editing: rootState.users.isEditing,
        adding: rootState.users.adding
    }
);

const mapDispatchToProps =
    {
        loadUsersRoutine,
        editUserRoutine,
        addUserRoutine,
        deleteUserRoutine
    };


export default connect(mapStateToProps, mapDispatchToProps)(Users);