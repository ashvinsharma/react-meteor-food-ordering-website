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
            selectedRow: {}
        }
    }

    static showType(cell) {
        return `${cell.userType}`
    }

    deleteAccount() {
        if (JSON.stringify(this.state.selectedRow) !== '{}') {
            Meteor.call('deleteAccount', this.state.selectedRow._id)
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
        if(status === 'pwd:success'){
            this.setState({changePasswordAlert: true})
        }
        this.setState({
            addModalShow: false,
            changePasswordShowModal: false
        })
        this.refs.table.cleanSelected()
    }

    handleAlertDismiss() {
        this.setState({changePasswordAlert: false})
    }

    showAlert() {
        if(this.state.changePasswordAlert){
            return(
                <Alert bsStyle={'success'} onDismiss={this.handleAlertDismiss.bind(this)}>Password Changed!</Alert>
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
                                               width='20%'
                                               editable={true}>Username</TableHeaderColumn>
                            <TableHeaderColumn dataField='profile'
                                               width='20%'
                                               dataFormat={Accounts.showType.bind(this)}>Type</TableHeaderColumn>
                            <TableHeaderColumn dataField='createdAt'>CreatedAt</TableHeaderColumn>
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