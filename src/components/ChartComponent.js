import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import Axios from 'axios';

const state = {
    labels: ['January', 'February', 'March',
        'April', 'May'],
    datasets: [
        {
            backgroundColor: [
                '#B21F00',
                '#C9DE00',
                '#2FDE00',
                '#00A6B4',
                '#6800B4'
            ],
            data: [65, 59, 80, 81, 56],
            borderColor: '#121212',
            borderWidth: 1,
        }
    ]
}
class ChartComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            doughnutData: {},
        }
    }

    async GetColorSet(user) {
        var request = "http://localhost:8000/user/" + user + "/colorSet"
        return Axios.get(request)
            .then(response => {
                return response.data
            })
    }

    componentDidMount() {
        Axios.get("http://localhost:8000/user/probonopd/stats/PrimaryLanguages")
            .then(response => {
                var backgroundColors = []
                var labels = []
                var data = []
                Object.keys(response.data).map((k, v) => {
                    labels.push(k)
                    data.push(response.data[k])
                })

                this.GetColorSet('probonopd').
                    then(colorSet => {
                        Object.keys(colorSet).map((language, irr) => {
                            backgroundColors.push(colorSet[language])
                        })

                        var dataSetItem = {
                            backgroundColor: backgroundColors,
                            data: data,
                            borderColor: '#808080',
                            borderWidth: 1
                        }

                        var datasets = []
                        datasets.push(dataSetItem)
                        var doughnutState = {
                            labels: labels,
                            datasets: datasets
                        }

                        this.setState({
                            doughnutData: doughnutState,
                        })

                    })
            })
    }

    render() {
        return (
            <Doughnut
                // data={this.state.doughnutData}
                data = {state}
                options={{
                    title: {
                        display: true,
                        text: 'Primary Languages',
                        fontSize: 18,
                        fontColor: '#fff',
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    },
                }}
            />
        );
    }
}

export default ChartComponent
