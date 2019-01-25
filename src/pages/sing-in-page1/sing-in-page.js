import React, {Component} from "react"
import './sing-in-page.css'
import Container from "../../components/container/container"
import SignIn from "../../components/sign-in/sign-in"
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import SignInInput from "../../components/sign-in-input/sign-in-input";
import SignInButton from "../../components/sign-in-button/sign-in-button";

export default class singInPage extends Component {
    render() {
        return (
            <Container>
                <SignIn
                    // hint="Please note an activation code will be sent via text message to the provided cell phone number"
                    title="SIGN-IN REQUIRED"
                >
                    <SignInInput name="Login"/>
                    <SignInInput name="Password"/>
                    <SignInButton name="LOGIN"/>
                    <SignInButton name="CREAT AN ACCOUNT" color="blue"/>
                </SignIn>
            </Container>
        )
    }
}