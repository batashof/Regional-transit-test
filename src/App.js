import React, {Component, Fragment} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import SingInRequired from "./pages/sing-in-required/sing-in-required"
import AccountDetails from "./pages/account-details/account-details"
import SingUpFirst from "./pages/sign-up-first/sing-up-first"
import SingUpSecond from "./pages/sing-up-second/sing-up-second"
import UserMain from "./pages/user-main/user-main"



class App extends Component {
    render() {
        return (
            <Router >
                <Fragment>
                    <Switch>
                        <Route exact path="/" component={SingInRequired} />
                        <Route path="/sing-up-first" component={SingUpFirst} />
                        <Route path="/sing-up-second" component={SingUpSecond} />
                        <Route path="/account-details" component={AccountDetails}/>
                        <Route path="/user-main" component={UserMain}/>
                    </Switch>
                </Fragment>

            </Router>

        )
    }
}

export default App;
