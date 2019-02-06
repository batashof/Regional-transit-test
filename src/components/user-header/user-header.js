import React, {Component} from "react"
import './user-header.css'
import Logo from "../logo/logo";

export default class UserHeader extends Component {
    render() {
        return (
            <nav className="hero-head hero-head-background ">
                <div className="columns is-marginless is-centered is-vcentered">
                    <div className="column left centered">
                        <p className="navbar-item" href="/">
                           <Logo size="M"/>
                        </p>
                    </div>

                    <div className="column center centered">
                        <div className="navbar-item has-dropdown is-hoverable">
                            <p className="navbar-link">
                                Welcome,vd_graafswald
                            </p>

                            <div className="navbar-dropdown">
                                <p className="navbar-item">
                                    About
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="column centered right">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-primary">
                                    <strong>Sign up</strong>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

{/*<Navbar.Brand>*/
}
{/*<Navbar.Item>*/
}
{/*<Logo/>*/
}
{/*</Navbar.Item>*/
}
{/*<Navbar.Menu >*/
}
{/*<Navbar.Container>*/
}
{/*<Navbar.Item has-dropdown is-hoverable href="#">Second</Navbar.Item>*/
}
{/*</Navbar.Container>*/
}
{/*<Navbar.Container position="end">*/
}
{/*<Navbar.Item href="#">At the end</Navbar.Item>*/
}
{/*</Navbar.Container>*/
}
{/*</Navbar.Menu>*/
}

{/*</Navbar.Brand>*/
}