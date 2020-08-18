import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import Axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import  * as URL from '../Constants'

class ChartComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            doughnutData: '',
            loading: true
        }
    }

    // for username use {this.props.username}

    async GetColorSet(user) {
        var request = URL.httpURL + user + `/colorSet`
        return Axios.get(request)
            .then(response => {
                return response.data
            })
    }

    componentDidMount() {
        Axios.get(URL.httpURL + this.props.username + `/stats/PrimaryLanguages`)
            .then(response => {
                var backgroundColors = []
                var labels = []
                var data = []
                Object.keys(response.data).forEach((k, v) => {
                    labels.push(k)
                    data.push(response.data[k])
                })

                this.GetColorSet(this.props.username)
                    .then(colorSet => {
                        Object.keys(colorSet).forEach((language, irr) => {
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
                            loading: false,
                        })

                    })
            })

    }

    render() {
        const { doughnutData, loading } = this.state

        let doughnut;

        if (loading) {
            doughnut = <CircularProgress color="secondary" style={{marginTop: '28%', marginLeft: '45%'}} />
        } else {
            doughnut = <Doughnut
                data={doughnutData}
                options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    title: {
                        display: true,
                        text: 'Repos per Primary Language',
                        fontSize: 18,
                        fontColor: '#fff',
                    },
                    legend: {
                        display: true,
                        position: this.props.legendPosition,
                        labels: {
                            boxWidth: 15,
                        },
                        align: 'start',
                    },
                }}
                width={100}
                height={65}
            />
        }
        return (
            doughnut
        );
    }
}

export default ChartComponent
