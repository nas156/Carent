import React, {useState} from "react";
import {Button, Form, Header, Icon, Message} from "semantic-ui-react";
import {registerRoutine} from "../routines";
import validator from 'validator';
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";

const RegisterPage = ({registerRoutine: register, isFetching}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [isNameValid, setNameValid] = useState(true);
    const [isEmailValid, setEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);

    const onRegisterClick = () => {
        if (isEmailValid && isPasswordValid) {
            const registerData = {
                "email": email,
                "password": password,
                "name": name
            };
            register(registerData);
        }
    }

    const onEmailChange = (e, {value}) => {
        setEmail(value);
        setEmailValid(validator.isEmail(value));
    }

    const onPasswordChange = (e, {value}) => {
        setPassword(value);
        setIsPasswordValid(value.length > 4);
    }

    const onNameChange = (e, {value}) => {
        setName(value);
        setNameValid(value.length > 2);
    }

    return (
        <div className="mainBox">
            <Header as="h2" color="green">Registration</Header>
            <Form>
                <Form.Input
                    fluid
                    icon="at"
                    iconPosition="left"
                    placeholder="Email"
                    type="email"
                    value={email}
                    error={!isEmailValid}
                    onChange={onEmailChange}
                    onBlur={() => setEmailValid(validator.isEmail(email))}
                />
                <Form.Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="Password"
                    type="password"
                    value={password}
                    error={!isPasswordValid}
                    onChange={onPasswordChange}
                    onBlur={() => setIsPasswordValid(password.length > 4)}
                />
                <Form.Input
                    fluid
                    value={name}
                    icon="id card"
                    iconPosition="left"
                    placeholder="Name"
                    type="text"
                    error={!isNameValid}
                    onChange={onNameChange}
                    onBlur={() => setNameValid(name.length > 2)}
                />
                <Button type="submit"
                        loading={isFetching}
                        disabled={isFetching}
                        onClick={() => onRegisterClick()}
                >
                    Register
                </Button>
            </Form>
            <Message>
                <Icon name="smile" size="big"/>
                <NavLink exact to="/login" color="black">
                    I HAVE AN ACCOUNT
                </NavLink>
            </Message>
        </div>

    )
}

const mapStateToProps = rootState => (
    {
        isFetching: rootState.auth.isFetching
    }
);

const mapDispatchToProps =
    {
        registerRoutine
    };

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);