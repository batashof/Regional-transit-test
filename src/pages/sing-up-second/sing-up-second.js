import React, {Component} from "react"
import './sing-up-second.css'
import Container from "../../components/container/container"
import SignIn from "../../components/sign-in/sign-in"
import SignInInput from "../../components/sign-in-input/sign-in-input"
import {Link} from "react-router-dom"

export default class singUpSecond extends Component {
    constructor(props){
        super(props);
        this.state = {
            num: true
        };
        this.onChangeNum = this.onChangeNum.bind(this);

    }
    onChangeNum(a) {
        if (a > 999){
            this.setState({
                num: false
            })
        }
    }
    render() {
        return (
            <Container>
                <SignIn
                    hint="Please enter the 5-digit number that was sent to (856) 123-4567"
                    title="SIGN-UP"
                >
                    <SignInInput value={this.onChangeNum} name="Enter your activation code"/>
                    <Link to="/">
                        <SignInInput disabled={this.state.num} type="button" color="green" name="NEXT"/>
                    </Link>
                </SignIn>
            </Container>
        )
    }
}