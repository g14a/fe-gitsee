import React, { Component } from "react";
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import Axios from 'axios'
import * as URL from '../Constants'
import "../../App.css"
import ReactTooltip from 'react-tooltip';

class CalendarHeatMap extends Component {
    constructor(props) {
        super(props)
        this.state = {
            heatMapData: [],
        }
    }

    getTooltipDataAttrs = (value) => {
        if (value != null) {
            if (value.count == null) {
                value.count = 0
            }
            return {
                'data-tip': `${value.count} contributions on ${value.date}`,
            };
        }
    };

    componentDidMount() {
        var contributionArray = []
        console.log(URL.httpURL, "is url")
        
        Axios.get(URL.httpURL + this.props.username + `/stats/Contributions`)
            .then(response => {
                Object.keys(response.data).forEach((date, contributions) => {
                    contributionArray.push({ date: date, count: response.data[date] })
                })

                
                this.setState({
                    heatMapData: contributionArray,
                    startDate: contributionArray[0].date,
                    endDate: contributionArray[contributionArray.length - 1].date
                })
            })
    }

    render() {
        var today = new Date()
        var endDate = new Date().toISOString().split('T')[0];
        var startDate = new Date(today.setFullYear(today.getFullYear() - 1)).setDate(today.getDate() + 2)

        return (
            <div>
                <CalendarHeatmap
                    startDate={startDate}
                    endDate={endDate}
                    values={this.state.heatMapData}
                    classForValue={(value) => {
                        if (value != null) {
                            if (value.count === 0) {
                                return 'color-gitlab-n';
                            } else if (value.count > 0 && value.count <= 10) {
                                return 'color-gitlab-1';
                            } else if (value.count > 10 && value.count <= 20) {
                                return 'color-gitlab-2';
                            } else if (value.count > 20 && value.count <= 30) {
                                return 'color-gitlab-3';
                            } else if (value.count > 30 && value.count <= 40) {
                                return 'color-gitlab-4';
                            }
                            return 'color-gitlab-4'
                        }
                    }}
                    tooltipDataAttrs={this.getTooltipDataAttrs}
                />
                <ReactTooltip />
            </div>
        )
    }
}

export default CalendarHeatMap