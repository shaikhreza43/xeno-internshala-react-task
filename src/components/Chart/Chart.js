import React, { useState } from 'react';
import BaseLayoutWrapper from '../BaseLayoutWrapper/BaseLayoutWrapper';
import { Card, CardBody, CardTitle, Col, Row } from 'reactstrap';
import ReactApexChart from 'react-apexcharts'

const Chart = (props) => {

    const [columnChart, setColumnChart] = useState({
        series: [{
            name: 'Net Profit',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        }, {
            name: 'Revenue',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        }, {
            name: 'Free Cash Flow',
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }],
        options: {
            chart: {
                type: 'bar',
                height: 350
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded'
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            },
            yaxis: {
                title: {
                    text: '$ (thousands)'
                }
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return "$ " + val + " thousands"
                    }
                }
            }
        },


    });

    return (
        <BaseLayoutWrapper>
            <Row>
                <Col lg="4">
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">
                                Author Sales
                            </CardTitle>
                            <ReactApexChart options={columnChart.options} series={columnChart.series} type="bar" height={350} />
                        </CardBody>
                    </Card>
                </Col>

                <Col lg="4">
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">
                                Technologies
                            </CardTitle>

                        </CardBody>
                    </Card>
                </Col>

                <Col lg="4">
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">
                                Total Orders
                            </CardTitle>

                        </CardBody>
                    </Card>
                </Col>

            </Row>

            <Row style={{ marginTop: '5%' }}>
                <Col lg="4">
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">
                                Announcements
                            </CardTitle>

                        </CardBody>
                    </Card>
                </Col>

                <Col lg="4">
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">
                                Projects
                            </CardTitle>

                        </CardBody>
                    </Card>
                </Col>

                <Col lg="4">
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">
                                Today's Schedule
                            </CardTitle>

                        </CardBody>
                    </Card>
                </Col>

            </Row>

            <Row style={{ marginTop: '5%' }}>
                <Col lg="5">
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">
                                Top Products
                            </CardTitle>

                        </CardBody>
                    </Card>
                </Col>

                <Col lg="7">
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">
                                Sales Statistics
                            </CardTitle>

                        </CardBody>
                    </Card>
                </Col>

            </Row>
        </BaseLayoutWrapper>
    )
}

export default Chart;