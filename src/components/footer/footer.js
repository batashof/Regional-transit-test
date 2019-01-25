import React, {Component} from "react"
import './footer.css'
import {ReactComponent as Parkeon} from "../../images/1435.svg"
import {ReactComponent as Twitter} from "../../images/twitter.svg"
import {ReactComponent as Facebook} from "../../images/facebook.svg"
import {ReactComponent as LinkedIn} from "../../images/linkedin.svg"
import {ReactComponent as Magnifier} from "../../images/magnifier.svg";
import {Link} from "react-router-dom";

export default class footer extends Component {
    render() {
        return (
            <div className="Footer">
                <div className="Footer__main">
                        <img className="Footer__logo" width="170px" src="../../images/parkeon.png" alt="parkeon" />
                    <div className="Footer__links">
                        <Link to="/">How to register?</Link>
                        <Link to="/">Legal notice</Link>
                        <Link to="/">Term of Service</Link>
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