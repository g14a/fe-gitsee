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
        Axios.get(`http://localhost:8000/user/${this.props.username}/stats/PrimaryLanguageStars`)
            .then(response => {
                var backgroundColors = []
                var labels = []
                var data = []
                Object.keys(response.data).map((k, v) => {
                    labels.push(k)
                    data.push(response.data[k])
                })

                this.GetColorSet(this.props.username).
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

                        console.log(this.state.doughnutData)

                    })
            })

    }

    render() {
        return (
            <Doughnut
                data={this.state.doughnutData}
                options={{
                    responsive: true,
                    title: {
                        display: true,
                        text: 'Stars per Primary Language',
                        fontSize: 18,
                        fontColor: '#fff',
                    },
                    legend: {
                        display: true,
                        position: 'left',
                        labels: {
                            boxWidth: 20,
                        },
                        align: 'start',
                    },
                }}
                width={100}
                height={65}
            />
        );
    }
}

export default ChartComponent
