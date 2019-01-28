import React, {Component} from "react"
import './account-details.css'
import Container from "../../components/container/container"
import SignIn from "../../components/sign-in/sign-in"
import SignInInput from "../../components/sign-in-input/sign-in-input"
import {Link} from "react-router-dom"

export default class accountDetails extends Component {
    onChange(a) {
        console.log(a)
    }
    render() {
        return (
            <Container>
                <SignIn
                    title="ACCOUNT DETAILS"
                    hint="Please select a login and a password for your account"
                >
                    <SignInInput value={this.onChange} name="Login"/>
                    <SignInInput value={this.onChange} type="password" name="Password"/>
                    <SignInInput value={this.onChange} type="password" name="Re-enter password"/>
                    <Link to="/">
                        <SignInInput type="button" color="green" name="CREAT AN ACCOUNT"/>
                    </Link>
                </SignIn>
            </Container>
        )
    }
}