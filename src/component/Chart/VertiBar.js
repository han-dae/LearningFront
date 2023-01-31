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
      
        percent: 17,
        key: 'Naver'
    }, {
        
        percent: 15,
        key: 'SSG'
    }, {
        
        percent: 13,
        key: 'Coupang'
    }, {
        
        percent: 6,
        key: 'Lotte'
    }

];

export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/vertical-composed-chart-w6fni';

    render() {
        return (
            <ResponsiveContainer width="60%" height="55%">
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
                        type="number"
                        display="none"
                        label={{ value: '', offset: 30, angle: 0, position: 'bottom' }}
                    />
                    <YAxis
                        dataKey="key"
                        display="none"
                        type="category" />
                    <Tooltip />
                    <Legend />

                    <Bar
                        dataKey="percent"
                        fill="#413ea0"
                        isAnimationActive={false}

                    />

                </ComposedChart>
            </ResponsiveContainer>
        );
    }
}
