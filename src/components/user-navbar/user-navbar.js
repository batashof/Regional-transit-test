import React, {Component} from "react"
import './user-navbar.css'

export default class UserNavbar extends Component {
    render() {
        return (
            <section style={{width: 290}}>
            <aside className="menu" style={{width: 190, margin: 50}}>
                {/*<p className="menu-label is-size-6 has-text-weight-normal">*/}
                {/*TICKET MANAGEMENT*/}
                {/*</p>*/}
                <ul className="menu-list ">
                    <li><p className="is-size-6 has-text-weight-bold">TICKET MANAGEMENT</p></li>
                    <li>
                        <a >
                            <span className="icon">
                            <i className="fas fa-lg fa-ticket-alt"/>
                            </span>
                            <p className="is-vcentered">Buy tickets</p>
                        </a>
                    </li>
                    <li><a>My tickets</a></li>
                </ul>

                <ul className="menu-list">
                    <li><p className="is-size-6 has-text-weight-bold">SETTINGS</p></li>
                    <li><a>Account settings</a></li>
                    <li><a>Profiles</a></li>
                    <li><a>Payment options</a></li>
                    <li><a>Vehicles</a></li>
                </ul>


            </aside>
                <div className="is-divider-vertical" />
            </section>
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