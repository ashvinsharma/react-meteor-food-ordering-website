import {createContainer} from 'meteor/react-meteor-data'
import React, {Component} from 'react'
import {Accordion, Button, ButtonGroup, Col, Grid, Panel, Row} from 'react-bootstrap'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import {HorizontalGridLines, LineSeries, XAxis, XYPlot, YAxis} from 'react-vis'


class Graph extends Component {
    render() {
        return (
            <div>
                <XYPlot
                    width={1300}
                    height={300}>
                    <XAxis/>
                    <YAxis/>
                    <HorizontalGridLines/>
                    <LineSeries
                        data={[
                            {x: 1, y: 100},
                            {x: 2, y: 240},
                            {x: 3, y: 140},
                            {x: 4, y: 250},
                            {x: 5, y: 190},
                            {x: 7, y: 210},
                            {x: 8, y: 240},
                            {x: 9, y: 300},
                            {x: 10, y: 400},
                            {x: 11, y: 350},
                            {x: 12, y: 210},
                            {x: 13, y: 540},
                            {x: 14, y: 300},
                            {x: 15, y: 190},
                            {x: 16, y: 210},
                            {x: 17, y: 194},
                            {x: 18, y: 293},
                            {x: 19, y: 480},
                            {x: 20, y: 537},
                            {x: 21, y: 145},
                            {x: 22, y: 0},
                            {x: 23, y: 0},
                            {x: 24, y: 0},
                            {x: 25, y: 0},
                            {x: 26, y: 0},
                            {x: 27, y: 0},
                            {x: 28, y: 0},
                            {x: 29, y: 0},
                            {x: 31, y: 0},
                        ]}/>
                </XYPlot>
            </div>
        )
    }
}

export default Graph