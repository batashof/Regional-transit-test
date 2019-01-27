import React, {Component} from "react"
import './sing-in-required.css'
import Container from "../../components/container/container"
import SignIn from "../../components/sign-in/sign-in"
import SignInInput from "../../components/sign-in-input/sign-in-input"
import {Link} from "react-router-dom"

export default class singInRequired extends Component {
    render() {
        return (
            <Container>
                <SignIn
                    title="SIGN-IN REQUIRED"
                >
                    <SignInInput name="Login"/>
                    <SignInInput type="password" name="Password"/>
                    <SignInInput color="green" type="button" name="LOGIN"/>
                    <Link to="/account-details">
                        <SignInInput type="button" color="blue" name="CREAT AN ACCOUNT"/>
                    </Link>
                </SignIn>
            </Container>
        )
    }
}