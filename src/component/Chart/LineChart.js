import React, { PureComponent } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
//// 이거 안사용됨
const data = [
    {
        name: "한대찬",
        uv: 4000,
        pv: 2400,
        
    },
    {
        name: "서창국",
        uv: 3000,
        pv: 1398,
        
    },
    {
        name: "박상현",
        uv: 2000,
        pv: 9800,
        
    },
    {
        name: "이성재",
        uv: 2780,
        pv: 3908,
        
    },
    {
        name: "주하영",
        uv: 1890,
        pv: 4800,
        
    },
    {
        name: "Page G",
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

export default class Example extends PureComponent {
    // static demoUrl = "https://codesandbox.io/s/simple-line-chart-kec3v";

    render() {
        return (
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="2 2" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="pv"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                    />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        );
    }
}