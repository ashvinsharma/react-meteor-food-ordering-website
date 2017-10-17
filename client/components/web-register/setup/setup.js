import React, {Component} from 'react'
import {Col, Grid, ListGroup, ListGroupItem, Row} from 'react-bootstrap'
import {Link, Switch} from 'react-router-dom'
import PrivateRoute from '../../account/private-route'
import Accounts from './accounts'

export default class Setup extends Component{
   render() {
       return(
          <Grid bsClass="container-fluid">
              <Row>
                  <Col md={2}>
                      <ListGroup>
                          <Link to={`${this.props.match.url}/accounts`}>
                              <ListGroupItem href="#">Accounts</ListGroupItem>
                          </Link>
                      </ListGroup>
                  </Col>
                  <Col md={10}>
                      <Switch>
                          <PrivateRoute path={`${this.props.match.url}/accounts`} component={Accounts}/>
                      </Switch>
                  </Col>
              </Row>
          </Grid>
       )
   }
}