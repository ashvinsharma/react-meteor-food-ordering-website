// noinspection NpmUsedModulesInstalled
import {createContainer} from 'meteor/react-meteor-data'
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

    renderDashboard() {
        return (
            <div>
                {this.props.user[0].roles[1] === 'cashier' || this.props.user[0].roles[1] === 'admin' ?
                    (<Nav><LinkContainer to={'/web-register'}><NavItem
                        eventKey={1}>Web-Register</NavItem></LinkContainer></Nav>) : <div/>}
                {this.props.user[0].roles[1] === 'cook' || this.props.user[0].roles[1] === 'admin' ?
                    (<Nav>
                        <LinkContainer to={'/cookDashboard'}><NavItem
                            eventKey={4}>Cook</NavItem></LinkContainer>
                    </Nav>) : <div/>}
            </div>
        )
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
                    {typeof this.props.user[0] !== 'undefined' &&
                    typeof this.props.user[0].roles !== 'undefined' ?
                        (this.props.user[0].roles[0] === 'staff' ? this.renderDashboard() : <div/>)
                        : <div/>}
                    {this.renderUserAction()}
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default createContainer(() => {
    Meteor.subscribe('user')
    return {user: Meteor.users.find({_id: Meteor.userId()}).fetch()}
}, withRouter(Header))
