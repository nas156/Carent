import React from 'react';
import "./App.css"
import {Route, Switch} from "react-router";
import Header from "./components/header";
import Footer from "./components/footer";
import Cars from "./containers/carsPage";
import Users from "./containers/userPage";


class App extends React.Component {
    render() {
        return (
            <div className="carentApp">
                <Header/>
                <Switch>
                    <Route exact path="/cars" component={Cars}/>
                    <Route exact path="/users" component={Users}/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default App;