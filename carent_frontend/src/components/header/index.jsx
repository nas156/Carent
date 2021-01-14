import React, {useState} from "react";
import style from "./header.module.css"
import {Menu} from "semantic-ui-react";

const Header = (props) => {
    const [activeItem, setActiveItem] = useState("cars");

    const handleItemClick = (e, {name}) => setActiveItem(name);

    return (
        <div className={style.header}>
            <Menu pointing secondary>
                <Menu.Item
                    name='cars'
                    active={activeItem === 'cars'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='orders'
                    active={activeItem === 'orders'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='users'
                    active={activeItem === 'users'}
                    onClick={handleItemClick}
                />
                <Menu.Menu position='right'>
                    <Menu.Item
                        name='logout'
                        active={activeItem === 'logout'}
                        onClick={handleItemClick}
                    />
                </Menu.Menu>
            </Menu>
        </div>
    );
};

export default Header;