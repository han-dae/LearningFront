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
            <ResponsiveContainer width="80%" height="55%" >
                <ComposedChart
                    layout="vertical"
                    width={500}
                    height={100}
                    data={data}
                    margin={{
                        top: 27,
                        right: 27,
                        bottom: 27,
                        left: 27,
                    }}
                    
                    >
                    
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
                    

                    <Bar
                    
                        dataKey="price"
                        fill="#0d0d73"
                        isAnimationActive={false}    
                    />

                </ComposedChart>
            </ResponsiveContainer>
        );
    }
}
