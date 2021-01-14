import React from 'react';
import "./App.css"
import {Switch} from "react-router";
import Header from "./components/header";
import Footer from "./components/footer";


class App extends React.Component {
    render() {
        return (
            <div className="carentApp">
                <Header/>
                <Switch>
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default App;