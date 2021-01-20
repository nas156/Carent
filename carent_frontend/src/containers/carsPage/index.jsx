import React, {useEffect, useState} from "react";
import {addCarRoutine, deleteCarRoutine, editCarRoutine, loadCarsRoutine} from "./routines";
import ItemsTable from "../../components/table";
import {connect} from "react-redux";
import AddEditModal from "../../components/addOrEditModal";

const Cars = ({
                  cars, loadCarsRoutine: load, addCarRoutine: add,
                  deleteCarRoutine: del, editCarRoutine: edit, loading, editing, deleting, adding
              }) => {

    const [showModal, setShowModal] = useState(false);
    const [number, setNumber] = useState("");
    const [numberOfRents, setNumberOfRents] = useState("");
    const [description, setDescription] = useState("");
    const [rentalCost, setRentalCost] = useState("");
    const [currentId, setCurrentId] = useState("");

    useEffect(() => {
        load();
    }, [load]);

    const clearState = () => {
        setShowModal(false);
        setNumber("");
        setNumberOfRents("");
        setDescription("");
        setRentalCost("");
        setCurrentId("");
    }

    const editCloseClick = () => {
        clearState();
    }

    const editApplyClick = () => {
        const newCar = {
            "number": number,
            "rentalCost": rentalCost,
            "description": description
        };
        if (currentId) {
            edit({id: currentId, car: newCar});
        } else {
            add(newCar);
        }
        clearState();
    }

    const onAddClick = () => {
        setShowModal(true);
    }

    const onDeleteClick = car => {
        del(car.id);
    }

    const onEditClick = car => {
        setCurrentId(car.id);
        setNumber(car.number);
        setDescription(car.description);
        setNumberOfRents(car.numberOfRents);
        setRentalCost(car.rentalCost);
        setShowModal(true);
    }

    return (
        <div className="mainTable">
            <ItemsTable
                loading={loading}
                addButton={{"onAdd": onAddClick, "loading": adding, "text": "Add car"}}
                columns={["Number", "Description", "Rental cost", "Number of rents"]}
                buttons={[
                    {"name": "Edit", "click": onEditClick, "color": "blue", "disabled": editing},
                    {"name": "Delete", "click": onDeleteClick, "color": "red", "disabled": deleting},
                ]}
                content={cars}
                color="violet"
            />
            <AddEditModal
                open={showModal}
                onCloseClick={editCloseClick}
                onApplyClick={editApplyClick}
                content={{
                    "icon": "car",
                    "title": "Change/Add car",
                    "fields":
                        [
                            {
                                "name": "Number",
                                "value": number,
                                "change": setNumber,
                                "blocked": Boolean(currentId)
                            },
                            {
                                "name": "Rental cost",
                                "value": rentalCost,
                                "change": setRentalCost
                            },
                            {
                                "name": "Number of rents",
                                "value": numberOfRents,
                                "change": setNumberOfRents,
                                "blocked": true
                            },
                            {
                                "name": "Description",
                                "value": description,
                                "change": setDescription
                            }
                        ]
                }}
            />
        </div>
    )
}

const mapStateToProps = rootState => (
    {
        cars: rootState.cars.cars,
        loading: rootState.cars.isLoading,
        deleting: rootState.cars.isDeleting,
        editing: rootState.cars.isEditing,
        adding: rootState.cars.adding
    }
);

const mapDispatchToProps =
    {
        loadCarsRoutine,
        editCarRoutine,
        addCarRoutine,
        deleteCarRoutine
    };


export default connect(mapStateToProps, mapDispatchToProps)(Cars);