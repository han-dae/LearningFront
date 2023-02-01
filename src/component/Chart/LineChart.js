import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: '할인',
    design : 50,
    price : 90,
    using : 10

  },
  {
    name :"유해물질",
    design: 50, price: 90, using : 10
  },
  {
    name: '친환경', design: 10, price: 10,using : 50
  },
  {
    name: '걱정없는', design: 10, price: 10,using : 90
  },
  {
    name: '무거운', design: 10, price: 10,using : 90
  },
  {
    name: '성장', design: 10, price: 10,using : 10
  },
  {
    name: '발육', design: 10, price: 10,using : 50
  },
  {
    name: '숙면', design: 10, price: 10,using : 50
  },
  {
    name: '환경', design: 50, price: 10,using : 10
  },
  {
    name: '자세', design: 10, price: 10,using : 50
  },
  {
    name: '기능성', design: 10, price: 10,using : 90
  },
  {
    name: '예쁜', design: 90, price: 10,using : 50
  },
  {
    name: '재구매', design: 10, price: 10,using : 10
  },
  {
    name: '투자', design: 10, price: 90,using : 50
  },
  {
    name: '구매력', design: 10, price: 90,using : 10
  },
  {
    name: '독립심', design: 90, price: 75,using : 10
  },
  {
    name: '씩씩한', design: 90, price: 75,using : 10
  },
  {
    name: '귀여운', design: 90, price: 75,using : 10
  },
  {
    name: '북유럽', design: 90, price: 75,using : 10
  },
 
];

export default class Chart extends PureComponent {

  render() {
    return (
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="2 2" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="price" stroke="#9999ff" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="design" stroke="#339933" activeDot={{ r: 8 }}/>
        <Line type="monotone" dataKey="using" stroke="#ff66cc" activeDot={{ r: 8 }}/>
      </LineChart>
    );
  }
}