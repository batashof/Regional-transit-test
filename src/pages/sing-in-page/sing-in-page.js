import React, {Component} from "react"
import './sing-in-page.css'
import Container from "../../components/container/container"
import SignIn from "../../components/sign-in/sign-in"
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"

export default class singInPage extends Component {
    render() {
        return (

                <Container>
                    <SignIn
                        hint="Please note an activation code will be sent via text message to the provided cell phone number"
                    />

                    {/*<div className="Sing-in-page__main"/>*/}
                </Container>

        )
    }
}