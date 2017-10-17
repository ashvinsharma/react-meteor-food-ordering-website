import React, {Component} from 'react'
import {Col, Grid, ListGroup, ListGroupItem, Row} from 'react-bootstrap'

export default class Setup extends Component{
   render() {
       return(
          <Grid bsClass="container-fluid">
              <Row>
                  <Col md={2}>
                      <ListGroup>
                          <ListGroupItem>Accounts</ListGroupItem>
                      </ListGroup>
                  </Col>
              </Row>
          </Grid>
       )
   }
}