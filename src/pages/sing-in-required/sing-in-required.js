import React, {Component} from "react"
import './sing-in-required.css'
import Container from "../../components/container/container"
import SignIn from "../../components/sign-in/sign-in"
import SignInInput from "../../components/sign-in-input/sign-in-input"
import {Link} from "react-router-dom"

export default class singInRequired extends Component {
    onChange(a) {
       console.log(a)
    }
    render() {
        return (
            <Container>
                <SignIn
                    title="SIGN-IN REQUIRED"
                >
                    <SignInInput value={this.onChange} name="Login"/>
                    <SignInInput value={this.onChange} type="password" name="Password"/>
                    <SignInInput color="green" type="button" name="LOGIN"/>
                    <Link to="/sing-up-first">
                        <SignInInput type="button" color="blue" name="CREAT AN ACCOUNT"/>
                    </Link>
                </SignIn>
            </Container>
        )
    }
}