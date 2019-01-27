import React, {Component} from "react"
import './sign-in.css'

export default class SignIn extends Component {
    render() {
        return (
            <div className="Sign-in">
                <div className="Sign-in__wrapper">
                    <div className="Sign-in__right">
                        <img className="Sign-in__right_transport" width="150px" src="../../images/transport.png"
                             alt="transport"/>
                        <img className="Sign-in__right_qr" width="120px" src="../../images/qr.png" alt="qr"/>
                        <img width="100px" src="../../images/appStore.png" alt="appStore"/>
                        <img width="100px" src="../../images/googlePlay.png" alt="googlePlay"/>
                    </div>
                    <div className="Sign-in__left">
                        <div className="Sign-in__title">
                            {this.props.title}
                        </div>
                        <div className="Sign-in__hint">
                            {this.props.hint}
                        </div>
                        <form className="Sign-in__form">
                            {this.props.children}
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}