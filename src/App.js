import React, {Component, Fragment} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from "./components/header/header"
import Footer from "./components/footer/footer"
import SingInPage from "./pages/sing-in-page/sing-in-page"
import SingIn from "./components/sign-in/sign-in"

class App extends Component {
    render() {
        return (
            <Router >
                <Fragment>

                    <Switch>
                        <Route exact path="/" component={SingInPage} />
                        {/*<Route path="/news/:id" component={OneNews}/>*/}
                        {/*<Route path="/news" component={News} />*/}
                        {/*<Route path="/dictionary" component={Dictionary} />*/}
                        {/*<Route path="/login" component={Login} />*/}
                        {/*<Route path="/register" component={Login} />*/}
                    </Switch>

                </Fragment>

            </Router>

        )
    }
}

export default App;
