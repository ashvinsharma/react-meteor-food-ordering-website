import React, {Component} from 'react'
import {MenuItem, Nav, Navbar, NavDropdown, NavItem} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default class Header extends Component {
    func() {
        Meteor.logout()
    }

    renderUserAction() {
        if (Meteor.userId() !== null) {
            return (
                <Nav pullRight>
                    <NavItem eventKey={3} onClick={this.func.bind(this)}><Link to="/">Logout</Link></NavItem>
                </Nav>
            )
        } else {
            return (
                <Nav pullRight>
                    <NavItem eventKey={1}><Link to="/login">Login</Link></NavItem>
                    <NavItem eventKey={2}><Link to="/signup">SignUp</Link></NavItem>
                </Nav>
            )
        }
    }

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
                    <NavItem eventKey={1}><Link to={'/web-register/default'}>Web-Register</Link></NavItem>
                    <NavItem eventKey={2}>Link</NavItem>
                    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Action</MenuItem>
                        <MenuItem eventKey={3.2}>Another action</MenuItem>
                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                        <MenuItem divider/>
                        <MenuItem eventKey={3.4}>Separated link</MenuItem>
                    </NavDropdown>
                </Nav>
                {this.renderUserAction()}
            </Navbar>
        )
    }
}

