import React, {useState} from "react";
import style from "./header.module.css"
import {Icon, Menu} from "semantic-ui-react";
import {useHistory} from "react-router";

const Header = (props) => {
    const [activeItem, setActiveItem] = useState("cars");

    const history = useHistory();

    const handleItemClick = (e, {name}) => {
        setActiveItem(name);
        if (name === "logout") {
            props.logout();
            return;
        }
        history.push(`/${name}`);
    };

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
                    <Menu.Item>
                        <Icon name='like'/>
                        {`Hi, ${props.user.name}`}
                    </Menu.Item>
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