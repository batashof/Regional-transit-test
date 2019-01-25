import React, {Component} from "react"
import './container.css'
import {ReactComponent as Logo} from "../../images/logo.svg"
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"

export default class container extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="Container__main">
                    <div className="Container__filter"/>
                        {this.props.children}
                </div>
                <Footer/>
            </div>
        )
    }
}