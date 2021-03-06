import React, { PureComponent } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


export default class ChartGraph extends PureComponent {
    render() {
        console.log("data->", this.props.graphData)

        return (
            <div className="mt-4">
                <LineChart
                    width={1200}
                    height={600}
                    data={this.props.graphData}
                    margin={{
                        top: 5, right: 10, left: 10, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey={"open"} stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey={"high"} stroke="#82ca9d" />
                    <Line type="monotone" dataKey={"low"} stroke="#00FFFF" />
                    <Line type="monotone" dataKey={"close"} stroke=" #FF6700" />
                </LineChart>
            </div>
        );
    }
}
