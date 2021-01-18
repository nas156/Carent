import React from "react";
import style from "./modal.module.css";
import {Button, Header, Icon, Input, Modal} from "semantic-ui-react";

const AddEditModal = ({open, onCloseClick, onApplyClick, content}) => {
    return (
        <Modal
            closeOnDimmerClick
            onClose={() => onCloseClick()}
            open={open}
        >
            <Header icon={content.icon} content={content.title}/>
            <Modal.Content>
                {content.fields.map(item => (
                    <div className={style.modal} key={item.name}>
                        <Input
                            disabled={item.blocked}
                            fluid
                            label={item.name}
                            value={item.value}
                            onChange={e => item.change(e.target.value)}
                        />
                    </div>
                ))}
            </Modal.Content>
            <Modal.Actions>
                <Button color='red' onClick={() => onCloseClick()}>
                    <Icon name='remove'/> Cancel
                </Button>
                <Button color='green' onClick={() => onApplyClick()}>
                    <Icon name='checkmark'/> Apply
                </Button>
            </Modal.Actions>
        </Modal>
    );
};

export default AddEditModal;