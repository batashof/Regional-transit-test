import React, {Component} from "react"
import './sign-in-input.css'


export default class SignInInput extends Component {
    render() {
        return (
            <input placeholder={this.props.name} className="Sign-in-input"/>
        )
    }
}