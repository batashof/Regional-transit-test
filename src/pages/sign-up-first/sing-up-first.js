import React, {Component} from "react"
import './sing-up-first.css'
import Container from "../../components/container/container"
import SignIn from "../../components/sign-in/sign-in"
import SignInInput from "../../components/sign-in-input/sign-in-input"
import {Link} from "react-router-dom"
import * as EmailValidator from "email-validator"

export default class singUpFirst extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: true,
            tel: true
        };
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeTel = this.onChangeTel.bind(this);
    }
    onChangeEmail(a) {
        if (EmailValidator.validate(a)){
            this.setState({
                email: false
            })
        }
    }
    onChangeTel(a) {
        if (a > 1000000){
            this.setState({
                tel: false
            })
        }
    }
    render() {
        return (
            <Container>
                <SignIn
                    hint="Please note an activation code will be sent via text message to the provided cell phone number"
                    title="SIGN-UP"
                >
                    <SignInInput value={this.onChangeTel} type="tel" name="Cell phone number"/>
                    <SignInInput value={this.onChangeEmail} type="email" name="Email"/>
                    <Link to="/sing-up-second">
                        <SignInInput disabled={this.state.tel || this.state.email} type="button" color="green" name="SEND ME A CODE"/>
                    </Link>
                </SignIn>
            </Container>
        )
    }
}