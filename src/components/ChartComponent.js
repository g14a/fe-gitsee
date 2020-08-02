import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import Axios from 'axios';

const state = {
    labels: ["Brainfuck", "C#", "CSS", "HTML", "Java", "Javascript"],
    datasets: [
        {
            backgroundColor: [
                "#4ecca3",
                "#90b8f8",
                "#90b8f8",
                "#e47676",
                "#a0204c",
                "#90b8f8",
            ],
            data: [1, 1, 3, 3, 24, 8],
            borderColor: "#121212",
            borderWidth: 0,
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
        Axios.get("http://localhost:8000/user/kovidgoyal/stats/PrimaryLanguages")
            .then(response => {
                var backgroundColors = []
                var labels = []
                var data = []
                Object.keys(response.data).map((k, v) => {
                    labels.push(k)
                    data.push(response.data[k])
                })

                this.GetColorSet('kovidgoyal').
                    then(colorSet => {
                        Object.keys(colorSet).map((language, irr) => {
                            backgroundColors.push(colorSet[language])
                        })
                    })

                var dataSetItem = {
                    backgroundColor: backgroundColors,
                    data: data,
                    borderColor: '#121212',
                    borderWidth: 0
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

                console.dir(doughnutState)
            })
    }

    render() {
        return (
            <Doughnut
                data={this.state.doughnutData}
                //data={state}
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
