import React, {Component} from 'react'
import {MenuItem, Nav, Navbar, NavDropdown, NavItem} from 'react-bootstrap'
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
                    <NavItem eventKey={1}><Link className="links" to="/login">Login</Link></NavItem>
                    <NavItem eventKey={2}><Link className="links" to="/signup">SignUp</Link></NavItem>
                </Nav>
            )
        }
    }

    render() {
        return (
            <Navbar className="navbar" inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link className="links" to={'/'}>Food Delivery</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1}><Link className="links"
                                                    to={'/web-register/default'}>Web-Register</Link></NavItem>
                    </Nav>
                    {this.renderUserAction()}
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default withRouter(Header)
