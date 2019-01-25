import React, {Component} from "react"
import './sign-in.css'
import {ReactComponent as QrCode} from "../../images/qr.svg"
import {ReactComponent as AppStore} from "../../images/appStore.svg"
import {ReactComponent as Transport} from "../../images/transport.svg"
import {ReactComponent as GooglePlay} from "../../images/googlePlay.svg"

export default class SignIn extends Component {
    render() {
        return (
            <div className="Sign-in__main">
                <div className="Sign-in__wrapper">
                    <div className="Sign-in__right">
                        <img className="Sign-in__right_transport" width="150px" src="../../images/transport.png" alt="transport"/>
                        <img className="Sign-in__right_qr" width="120px" src="../../images/qr.png" alt="qr"/>
                        <img width="100px" src="../../images/appStore.png" alt="appStore"/>
                        <img width="100px" src="../../images/googlePlay.png" alt="googlePlay"/>
                        {/*<Transpsort/>*/}
                        {/*<QrCode/>*/}
                        {/*<AppStore/>*/}
                        {/*<GooglePlay/>*/}

                    </div>
                    <div className="Sign-in__left">
                        <div className="Sign-in__title">
                            SIGN-IN REQUIRED
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}