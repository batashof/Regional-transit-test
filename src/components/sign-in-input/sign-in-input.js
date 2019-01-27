import React, {Component} from "react"
import './sign-in-input.css'

export default class SignInInput extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ""};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        }, () => this.props.value(this.state.value));
    }

    showButtonAdditions() {
        if (this.props.name === "LOGIN") {
            return (
                <div className="Sign-in-input__additions">
                    <div className="Sign-in-input__checkbox">
                        <input className="Sign-in-input__checkbox_box" type="checkbox" id="remember" name="remember"/>
                        <label className="Sign-in-input__checkbox_label" htmlFor="remember">Remember me</label>
                    </div>
                    <a className="Sign-in-input__link" href="/">Forgot your password?</a>
                </div>
            )
        }
    }


    render() {
        let style = "Sign-in-input";
        let value = this.state.value;

        if (this.props.type === "button") {
            value = this.props.name;
            if (this.props.color === "green") {
                style = "Sign-in-input__button Sign-in-input__button_color_green"
            } else {
                style = "Sign-in-input__button Sign-in-input__button_color_blue"
            }
        }

        return (
            <div>
                <input
                    value={value}
                    onChange={this.handleChange}
                    type={this.props.type}
                    placeholder={this.props.name}
                    className={style}
                    disabled={this.props.disabled}
                />
                {this.showButtonAdditions()}
            </div>
        )
    }
}
