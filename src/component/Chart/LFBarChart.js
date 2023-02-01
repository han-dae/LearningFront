import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from 'react';
import axios from 'axios';
//import '../ApiService.js'

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
 
];
const TFIDF_API_BASE_URL = "http://localhost:8081/users/tfidf";

// async function test(){
//   const test = await axios.get(TFIDF_API_BASE_URL)
//   console.log("Test "+test)
// }

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';
  
  //const TFIDF_API_BASE_URL = "http://localhost:8081/users/tfidf";
  constructor(props) {
    //현재 클래스형 컴포넌트가 상속받고 있는 
    //리액트의 Component 클래스가 지닌 생성자 함수를 호출해 준다.
    super(props);
    //state의 초깃값 설정하기 
    this.state = {
        keyW : "",
        value : "",
        getData : async function(){
          await axios.get(TFIDF_API_BASE_URL)
        }
    };
}



componentDidMount() {
  // fetch(TFIDF_API_BASE_URL + "/")
  // .then((res)=>{
  //   console.log(res)
  // })
  this.state.getData()
}


  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
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
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
