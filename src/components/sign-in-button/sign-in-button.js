import React, {Component} from "react"
import './sign-in-button.css'


export default class SignInButton extends Component {
    showButtonAdditions() {
        if (this.props.name === "LOGIN") {
            return (
                <div className="Sign-in-button__additions">
                    <div className="Sign-in-button__checkbox">
                        <input className="Sign-in-button__checkbox_box" type="checkbox" id="remember" name="remember"/>
                        <label className="Sign-in-button__checkbox_label" for="remember">Remember me</label>
                    </div>
                    <a className="Sign-in-button__link" href="/">Forgot your password?</a>
                </div>
            )
        }
    }

    render() {
        let buttonStyle = "Sign-in-button";
        if (this.props.color === "green") {
            buttonStyle = buttonStyle + " Sign-in-button__color_green"
        }else {
            buttonStyle = buttonStyle + " Sign-in-button__color_blue"
        }
        return (
            <div>
                <button name="Login" className={buttonStyle}>
                    {this.props.name}
                </button>
                {this.showButtonAdditions()}

            </div>
        )
    }
}
SignInButton.defaultProps = {
  color: "green"
};