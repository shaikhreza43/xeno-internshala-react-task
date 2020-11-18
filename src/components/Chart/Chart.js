import React, { useState } from 'react';
import BaseLayoutWrapper from '../BaseLayoutWrapper/BaseLayoutWrapper';
import { Card, CardBody, CardTitle, Col, Row } from 'reactstrap';
import ReactApexChart from 'react-apexcharts';
import { LinearProgress, Typography } from '@material-ui/core';

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

    const [pieChart, setPieChart] = useState({
        optionsRadial: {
            plotOptions: {
                radialBar: {
                    startAngle: -135,
                    endAngle: 225,
                    hollow: {
                        margin: 0,
                        size: "70%",
                        background: "#fff",
                        image: undefined,
                        imageOffsetX: 0,
                        imageOffsetY: 0,
                        position: "front",
                        dropShadow: {
                            enabled: true,
                            top: 3,
                            left: 0,
                            blur: 4,
                            opacity: 0.24
                        }
                    },
                    track: {
                        background: "#fff",
                        strokeWidth: "67%",
                        margin: 0, // margin is in pixels
                        dropShadow: {
                            enabled: true,
                            top: -3,
                            left: 0,
                            blur: 4,
                            opacity: 0.35
                        }
                    },

                    dataLabels: {
                        showOn: "always",
                        name: {
                            offsetY: -20,
                            show: true,
                            color: "#888",
                            fontSize: "13px"
                        },
                        value: {
                            formatter: function (val) {
                                return val;
                            },
                            color: "#111",
                            fontSize: "30px",
                            show: true
                        }
                    }
                }
            },
            fill: {
                type: "gradient",
                gradient: {
                    shade: "dark",
                    type: "horizontal",
                    shadeIntensity: 0.5,
                    gradientToColors: ["#ABE5A1"],
                    inverseColors: true,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 100]
                }
            },
            stroke: {
                lineCap: "round"
            },
            labels: ["Percent"]
        },
        seriesRadial: [76]
    });


    const [series, setSeries] = useState({
        series: [{
            name: "Desktops",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }],
        options: {
            chart: {
                height: 350,
                type: 'line',
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },
            title: {
                text: 'Product Trends by Month',
                align: 'left'
            },
            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                },
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            }
        }
    });

    const [sales, setSales] = useState({

        series: [{
            data: [21, 22, 10, 28, 16, 21, 13, 30]
        }],
        options: {
            chart: {
                height: 350,
                type: 'bar',
                events: {
                    click: function (chart, w, e) {
                        // console.log(chart, w, e)
                    }
                }
            },
            colors: [
                "#eeeeee",
                "#0000FF"
            ],
            plotOptions: {
                bar: {
                    columnWidth: '45%',
                    distributed: true
                }
            },
            dataLabels: {
                enabled: false
            },
            legend: {
                show: false
            },
            xaxis: {
                categories: [
                    ['John', 'Doe'],
                    ['Joe', 'Smith'],
                    ['Jake', 'Williams'],
                    'Amber',
                    ['Peter', 'Brown'],
                    ['Mary', 'Evans'],
                    ['David', 'Wilson'],
                    ['Lily', 'Roberts'],
                ],
                labels: {
                    style: {
                        colors: [
                            "#eeeeee",
                            "#0000FF"
                        ],
                        fontSize: '12px'
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

                            <ReactApexChart
                                options={pieChart.optionsRadial}
                                series={pieChart.seriesRadial}
                                type="radialBar"
                                width="350"
                            />

                        </CardBody>
                    </Card>
                </Col>

                <Col lg="4">
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">
                                Total Orders
                            </CardTitle>
                            <ReactApexChart options={series.options} series={series.series} type="line" height={350} />

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
                            <Typography variant="h6">
                                Lorem Ipsum is simply dummy text
                        </Typography>
                            <p className="text-justify">
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                        </CardBody>
                    </Card>
                </Col>

                <Col lg="4">
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">
                                Projects
                            </CardTitle>
                            <Typography variant="h6">
                                First Milestone achieved
                        </Typography>
                            <p className="text-justify">
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                            <LinearProgress variant="determinate" value={75}></LinearProgress>
                        </CardBody>
                    </Card>
                </Col>

                <Col lg="4">
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">
                                Today's Schedule
                            </CardTitle>
                            <Typography variant="h6">
                                UI/Ux Design Update's
                        </Typography>
                            <Typography variant="h6">
                                <p className="font-weight-bold">
                                    11:15AM-12:45PM
                               </p>
                            </Typography>
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
                            <ReactApexChart options={sales.options} series={sales.series} type="bar" height={350} />
                        </CardBody>
                    </Card>
                </Col>

            </Row>
        </BaseLayoutWrapper>
    )
}

export default Chart;