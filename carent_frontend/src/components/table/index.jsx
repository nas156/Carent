import React from "react";
import style from "./table.module.css";
import {Button, Segment, Table} from "semantic-ui-react";

const ItemsTable = ({columns, buttons, content, color, addButton, loading}) => (
    <Segment loading={loading} basic className={style.table}>
        <Table color={color} celled definition>
            <Table.Header fullWidth>
                <Table.Row>
                    {columns.map(item => (
                        <Table.HeaderCell key={item}>
                            {item}
                        </Table.HeaderCell>
                    ))}
                    {buttons ?
                        <Table.HeaderCell width={Math.round(buttons.length * 1.3)}>Actions</Table.HeaderCell> : null}
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {content.map(item => (
                    <Table.Row key={Math.random()}>
                        {Object.keys(item).filter(key => key !== "id").map(key => (
                            <Table.Cell key={key}>{item[key]}</Table.Cell>
                        ))}
                        {buttons ? <Table.Cell>
                            <div className={style.buttons}>
                                {buttons.map(btn => (
                                    <Button
                                        key={btn.name}
                                        color={btn.color}
                                        disabled={btn.disabled === item.id}
                                        onClick={() => btn.click(item)}
                                    >
                                        {btn.name}
                                    </Button>
                                ))}
                            </div>
                        </Table.Cell> : null}
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
        <Button color='green' floated='right' onClick={addButton.onAdd} disabled={addButton.loading}> {addButton.text} </Button>
    </Segment>
);

export default ItemsTable;