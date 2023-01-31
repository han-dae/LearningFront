import React, { PureComponent } from 'react';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';


const data = [
    {
        name: 'Naver',
        price: 28
    },{
        name: "Coupang",
        price: 21
    },{
        name: 'SSG몰',
        price: 5
    },{
        name: '롯데몰',
        price: 3
    }
];

export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/vertical-composed-chart-w6fni';

    render() {
        return (
            <ResponsiveContainer width="53%" height="55%">
                <ComposedChart
                    layout="vertical"
                    width={500}
                    height={100}
                    data={data}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                    }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        display="none" 
                        type="number"
                       // label={{ value: '', offset: 30, angle: 0, position: 'bottom' }}
                    />
                    <YAxis
                        display="none" 
                        dataKey="name"
                        type="category" />
                    <Tooltip />
                    <Legend />

                    <Bar
                        dataKey="price"
                        fill="#413ea0"
                        isAnimationActive={false}    
                    />

                </ComposedChart>
            </ResponsiveContainer>
        );
    }
}
