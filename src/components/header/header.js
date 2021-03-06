import React, {Component} from "react"
import './header.css'
import {ReactComponent as Search} from "../../images/search.svg"
import {Link} from "react-router-dom";
import Logo from "../logo/logo";

export default class header extends Component {
    render() {
        return (
            <div className="Header">
                <div className="Header__wrapper">
                    <Logo />
                    <div className="Header__menu">
                        <Link className="Header__menu_a" to="/">HOME</Link>
                        <Link className="Header__menu_a" to="/">DISCOVER THE APP</Link>
                        <Link className="Header__menu_a" to="/">FAQ</Link>
                        <Link className="Header__menu_a" to="/">NEWS</Link>
                        <Link className="Header__menu_a" to="/">CONTACT US</Link>
                    </div>

                    <input type="search" placeholder="SEARCH" className="Header__search"/>
                    <Search className="Header__search_magnifier"/>

                </div>
            </div>
        )
    }
}