import React, {Component} from 'react'
import {MenuItem, Nav, Navbar, NavDropdown, NavItem} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to={'/'}>React-Bootstrap</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1}>
                        <Link to={'/web-register/default'}>Web-Register</Link>
                    </NavItem>
                </Nav>
                <Nav pullRight>
                    <NavDropdown eventKey={1} title="Login/Signup" id="basic-nav-dropdown">
                        <MenuItem eventKey={1.1}>
                            <Link to="/login">Login</Link>
                        </MenuItem>
                        <MenuItem divider/>
                        <MenuItem eventKey={1.2}>
                            <Link to="/signup">SignUp</Link>
                        </MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar>
        )
    }
}

