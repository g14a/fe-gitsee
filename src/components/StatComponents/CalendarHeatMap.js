import React, { Component } from "react";
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import Axios from 'axios'

class CalendarHeatMap extends Component {
    constructor(props) {
        super(props)
        this.state = {
            heatMapData: '',
        }
    }

    componentDidMount() {
        var contributionArray = []
        Axios.get(`http://localhost:8000/user/${this.props.username}/stats/Contributions`)
            .then(response => {
                Object.keys(response.data).forEach((date, contributions) => {
                    console.log({ date: date, count: response.data[date] })
                    contributionArray.push({ date: date, count: contributions })
                })

                this.setState({
                    heatMapData: contributionArray,
                })

                console.log(this.state.heatMapData)
            })
    }

    render() {
        var today = new Date()
        var todayString = new Date().toISOString().split('T')[0];
        var last = new Date(today.setFullYear(today.getFullYear()-1)).toISOString().split('T')[0]
        
        return (
            <CalendarHeatmap
                startDate={last}
                endDate={todayString}
                values={[this.state.heatMapData]}
            />
        )
    }
}

export default CalendarHeatMap