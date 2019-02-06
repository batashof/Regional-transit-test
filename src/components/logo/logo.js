import React, {Component} from "react"
import './logo.css'
import {ReactComponent as LogoIcon} from "../../images/logo.svg"
import {ReactComponent as LogoIcon_m} from "../../images/logo_m.svg"

export default class Logo extends Component {
    render() {
        let style = "Logo";
        if (this.props.size === "M") {
            style = style + " Logo__size_m";
            return (
                <div className={style}>
                    <LogoIcon_m/>
                    <p>REGIONAL TRANSIT</p>
                </div>

            )
        }else
            return (
                <div className={style}>
                    <LogoIcon/>
                    <p>REGIONAL TRANSIT</p>
                </div>

            )
    }
}