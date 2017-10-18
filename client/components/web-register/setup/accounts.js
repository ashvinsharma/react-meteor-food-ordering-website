// noinspection NpmUsedModulesInstalled
import {createContainer} from 'meteor/react-meteor-data'
import React, {Component} from 'react'
import {Accordion, Button, ButtonGroup, Col, Grid, Panel, Row} from 'react-bootstrap'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'

class Accounts extends Component {
    constructor() {
        super()

        this.state = {selectedRow: {}}
    }

    static showType(cell) {
        if (cell.userType === 1) {
            return 'Admin'
        }
    }

    handleDeleteButtonClick() {
        if (JSON.stringify(this.state.selectedRow) !== '{}') {
            Meteor.call('customDelete', this.state.selectedRow._id)
        }
    }

    handleRowClick(row, isSelected) {
        if (isSelected) {
            this.setState({selectedRow: row})
        } else {
            this.setState({selectedRow: {}})
        }
    }

    ToolBar = props => {
        return (
            <div style={{margin: '15px'}}>
                <Grid>
                    <Row>
                        <Col md={12}>
                            <ButtonGroup>
                                <Button bsStyle="success">Add
                                    New</Button>
                                <Button bsStyle="danger"
                                        onClick={this.handleDeleteButtonClick.bind(this)}>Delete</Button>
                            </ButtonGroup>
                            {props.components.searchPanel}
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }

    render() {
        return (
            <div>
                <Accordion>
                    <Panel>
                        <BootstrapTable data={this.props.users}
                                        search={true}
                                        selectRow={{
                                            mode: 'radio',
                                            hideSelectColumn: true,
                                            bgColor: 'grey',
                                            clickToSelectAndEditCell: true,
                                            onSelect: this.handleRowClick.bind(this)
                                        }}
                                        options={{
                                            toolBar: this.ToolBar.bind(this),
                                            clearSearch: true
                                        }}
                                        pagination>
                            <TableHeaderColumn dataField='_id'
                                               isKey
                                               dataSort={true}
                                               hidden>Product ID</TableHeaderColumn>
                            <TableHeaderColumn dataField='username'
                                               width='20%'>Username</TableHeaderColumn>
                            <TableHeaderColumn dataField='profile'
                                               width='20%'
                                               dataFormat={Accounts.showType.bind(this)}>Type</TableHeaderColumn>
                            <TableHeaderColumn dataField='createdAt'>CreatedAt</TableHeaderColumn>
                        </BootstrapTable>
                    </Panel>
                </Accordion>
            </div>
        )
    }
}

export default createContainer(() => {
    Meteor.subscribe('users')
    return {users: Meteor.users.find({}).fetch()}
}, Accounts)