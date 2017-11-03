// noinspection NpmUsedModulesInstalled
import {createContainer} from 'meteor/react-meteor-data'
import React, {Component} from 'react'
import {Accordion, Alert, Button, ButtonGroup, Col, Grid, Panel, Row} from 'react-bootstrap'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import AddUser from './add-user'
import ChangePassword from './change-password'

class Accounts extends Component {
    constructor() {
        super()

        this.state = {
            addModalShow: false,
            changePasswordShowModal: false,
            disablePasswordButton: true,
            changePasswordAlert: false,
            addUserAlert: false,
            rmUserAlert: false,
            selectedRow: {}
        }
    }

    static showType(cell) {
        return `${cell.userType}`
    }

    static handleEditCellDetails(row, cellName, cellValue) {
        Meteor.call('products.update', row, cellName, cellValue)
    }

    deleteAccount() {
        if (JSON.stringify(this.state.selectedRow) !== '{}') {
            Meteor.call('account.delete', this.state.selectedRow._id)
            this.setState({rmUserAlert: true})
        }
    }

    handleRowClick(row, isSelected) {
        if (isSelected) {
            this.setState({
                selectedRow: row,
                disablePasswordButton: false
            })
        } else {
            this.setState({
                selectedRow: {},
                disablePasswordButton: true
            })
        }
    }

    modalClose(status) {
        if (status === 'pwd:success') {
            this.setState({changePasswordAlert: true})
        }
        if (status === 'add-user:success') {
            this.setState({addUserAlert: true})
        }
        this.setState({
            addModalShow: false,
            changePasswordShowModal: false
        })
        this.refs.table.cleanSelected()
    }

    handleAlertDismiss() {
        this.setState({
            changePasswordAlert: false,
            addUserAlert: false
        })
    }

    showAlert() {
        if (this.state.changePasswordAlert) {
            return (
                <Alert bsStyle={'success'} onDismiss={this.handleAlertDismiss.bind(this)}>Password changed!</Alert>
            )
        }
        if (this.state.addUserAlert) {
            return (
                <Alert bsStyle={'success'} onDismiss={this.handleAlertDismiss.bind(this)}>User account created!</Alert>
            )
        }
        if (this.state.rmUserAlert) {
            return (
                <Alert bsStyle={'danger'} onDismiss={this.handleAlertDismiss.bind(this)}>User account deleted!</Alert>
            )
        }
    }

    ToolBar = props => {
        return (
            <div style={{margin: '15px'}}>
                <Grid>
                    <Row>
                        <Col md={12}>
                            <ButtonGroup>
                                <Button bsStyle="success"
                                        onClick={() => {
                                            this.setState({addModalShow: true})
                                        }}>Add New</Button>
                                <Button bsStyle="warning"
                                        disabled={this.state.disablePasswordButton}
                                        onClick={() => {
                                            this.setState({changePasswordShowModal: true})
                                        }}>Change Password</Button>
                                <Button bsStyle="danger"
                                        onClick={this.deleteAccount.bind(this)}>Delete</Button>
                            </ButtonGroup>
                            {props.components.searchPanel}
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }

    render() {
        console.log(this.props.users)
        return (
            <div>
                <Accordion>
                    <Panel>
                        {this.showAlert()}
                        <BootstrapTable data={this.props.users}
                                        ref={'table'}
                                        search={true}
                                        selectRow={{
                                            mode: 'radio',
                                            hideSelectColumn: true,
                                            bgColor: 'grey',
                                            clickToSelectAndEditCell: true,
                                            onSelect: this.handleRowClick.bind(this)
                                        }}
                                        cellEdit={{
                                            mode: 'dbclick',
                                            blurToSave: false,
                                            beforeSaveCell: Accounts.handleEditCellDetails.bind(this)
                                        }}
                                        options={{
                                            toolBar: this.ToolBar.bind(this),
                                            clearSearch: true
                                        }}
                                        pagination>
                            <TableHeaderColumn dataField='_id'
                                               isKey
                                               dataSort={true}
                                               searchable={false}
                                               hidden>ID</TableHeaderColumn>
                            <TableHeaderColumn dataField='username'
                                               width='20%'
                                               dataSort={true}
                                               editable={true}>Username</TableHeaderColumn>
                            <TableHeaderColumn dataField='profile'
                                               width='20%'
                                               editable={false}
                                               dataFormat={Accounts.showType}>Type</TableHeaderColumn>
                            <TableHeaderColumn dataField='createdAt'
                                               searchable={false}
                                               editable={false}>CreatedAt</TableHeaderColumn>
                        </BootstrapTable>
                    </Panel>
                </Accordion>
                <AddUser show={this.state.addModalShow} callback={this.modalClose.bind(this)}/>
                <ChangePassword row={this.state.selectedRow} show={this.state.changePasswordShowModal}
                                callback={this.modalClose.bind(this)}/>
            </div>
        )
    }
}

export default createContainer(() => {
    Meteor.subscribe('users')
    return {users: Meteor.users.find({}).fetch()}
}, Accounts)