import React from "react";
import {Redirect, Route} from "react-router";
import {connect} from "react-redux";

const PublicRoute = ({component: Component, isAuthorized,...rest}) => {
    return (
        <Route {...rest} render={props => (
            isAuthorized ?
                <Redirect to="/cars" />
                : <Component {...props} />
        )} />
    );
};

const mapStateToProps = rootState => ({
    isAuthorized: rootState.auth.isAuthorized
});

export default connect(mapStateToProps)(PublicRoute);