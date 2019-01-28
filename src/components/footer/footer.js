import React, {Component} from "react"
import './footer.css'
import {ReactComponent as Twitter} from "../../images/twitter.svg"
import {ReactComponent as Facebook} from "../../images/facebook.svg"
import {ReactComponent as LinkedIn} from "../../images/linkedin.svg"
import {Link} from "react-router-dom";

export default class footer extends Component {
    render() {
        return (
            <div className="Footer">
                <div className="Footer__wrapper">
                    <img className="Footer__logo" width="170px" src="../../images/parkeon.png" alt="parkeon"/>
                    <div className="Footer__links">
                        <Link className="Footer__links__link" to="/">How to register?</Link>
                        <Link className="Footer__links__link" to="/">Legal notice</Link>
                        <Link className="Footer__links__link" to="/">Term of Service</Link>
                    </div>

                    <div className="Footer__social">
                        <Facebook/>
                        <Twitter/>
                        <LinkedIn/>
                    </div>
                </div>
            </div>
        )
    }
}