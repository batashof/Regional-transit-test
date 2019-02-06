import React, {Component} from "react"
import UserHeader from "./../user-header/user-header"
import UserNavbar from "./../user-navbar/user-navbar"
import './user-container.css'

export default class UserContainer extends Component {
    render() {
        return (
            <div >
                <UserHeader/>
                <UserNavbar/>
            </div>
        )
    }
}