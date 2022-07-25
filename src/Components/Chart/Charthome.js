import React, { Component } from 'react';
import Chart from './Chart';

class Charthome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartType: 'line'
        };

        this.columns = [
            ['Peso ideal', 60,65,70,75],
            ['Sobre Peso', 80, 85, 90,95],
            ['Obesidad',100,200,300,400],
        ]
    }
    
    setBarChart = () => {
        this.setState({
            chartType: 'bar'
        })
    }

    setLineChart = () => {
        this.setState({
            chartType: 'line'
        })
    }



    render() {
        return (
            <div>
                <Chart
                    columns = {this.columns}
                    chartType = {this.state.chartType}
                />
                <p>
                    Graficas de porsentajes
                    <button onClick={this.setBarChart}>Bara</button>
                    <button onClick={this.setLineChart}>Linea</button>
                </p>
            </div>
        );
    }
}

export default Charthome;