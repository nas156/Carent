import React, {useEffect} from "react";
import {getUserRoutine, logoutRoutine} from "../Auth/routines";
import {connect} from "react-redux";
import Header from "../../components/header";
import {Route, Switch} from "react-router";
import LoginPage from "../Auth/LoginPage";
import Orders from "../ordersPage";
import Cars from "../carsPage";
import Users from "../clientsPage";
import Footer from "../../components/footer";
import RegisterPage from "../Auth/RegisterPage";
import PublicRoute from "../PublicRoute";
import PrivateRoute from "../PrivateRoute";

const Routing = ({user, isAuthorized, getUserRoutine: getUser, logoutRoutine: logout}) => {

    useEffect(() => {
        if (!isAuthorized) {
            getUser();
        }
    });

    return (
        <div className="carentApp">
            {isAuthorized && <Header user={user} logout={logout}/>}
                <Switch>
                    <PublicRoute exact path="/login" component={LoginPage}/>
                    <PublicRoute  exact path="/register" component={RegisterPage}/>
                    <PrivateRoute exact path="/orders" component={Orders}/>
                    <PrivateRoute exact path="/cars" component={Cars}/>
                    <PrivateRoute exact path="/clients" component={Users}/>
                </Switch>
            {isAuthorized && <Footer />}
        </div>

    )
}

const mapStateToProps = rootState => (
    {
        user: rootState.auth.user,
        isAuthorized: rootState.auth.isAuthorized
    }
);

const mapDispatchToProps =
    {
        getUserRoutine,
        logoutRoutine
    };

export default connect(mapStateToProps, mapDispatchToProps)(Routing);