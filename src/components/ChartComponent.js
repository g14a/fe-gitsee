import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import Axios from 'axios';

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
        Axios.get("http://localhost:8000/user/prologic/stats/PrimaryLanguages")
            .then(response => {
                var backgroundColors = []
                var labels = []
                var data = []
                Object.keys(response.data).map((k, v) => {
                    labels.push(k)
                    data.push(response.data[k])
                })

                this.GetColorSet('prologic').
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
                data={this.state.doughnutData}
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
