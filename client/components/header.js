import React, {Component} from 'react'
import {Nav, Navbar, NavItem} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {Link, withRouter} from 'react-router-dom'

class Header extends Component {
    clickLogoutButton() {
        Meteor.logout(err => {
                if (err !== null) {
                    this.props.history.push('/')
                }
            }
        )
    }

    renderUserAction() {
        if (Meteor.userId() !== null) {
            return (
                <Nav pullRight>
                    <NavItem eventKey={3} onClick={this.clickLogoutButton.bind(this)}>Logout</NavItem>
                </Nav>
            )
        } else {
            return (
                <Nav pullRight>
                    <LinkContainer to="/login"><NavItem eventKey={1}>Login</NavItem></LinkContainer>
                    <LinkContainer to="/signup"><NavItem eventKey={2}>SignUp</NavItem></LinkContainer>
                </Nav>
            )
        }
    }

    render() {
        return (
            <Navbar className="navbar" inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to={'/'}>Food Delivery</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to={'/web-register'}><NavItem eventKey={1}>Web-Register</NavItem></LinkContainer>
                    </Nav>
                    <Nav>
                        <LinkContainer to={'/cookDashboard'}><NavItem eventKey={4}>Cook</NavItem></LinkContainer>
                    </Nav>
                    {this.renderUserAction()}
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default withRouter(Header)
