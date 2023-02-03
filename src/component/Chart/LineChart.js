import React, { PureComponent, useEffect, useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import ApiService from '../ApiService';



const Chart =()=> {

    const [Data, setData] = useState({
        stt: "",
        score: "",
      });

    useEffect(() => {
        ApiService.review()
        .then((res1) => {
          console.log(res1.status);
          console.log(res1.data);
          setData(res1.data);
          console.log(res1.data);
        })
        .catch((err) => {
          console.log("review() 에러", err);
        });
    }, []);
 
    return (
      <LineChart
        width={600}
        height={300}
        data={Data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="2 2" />
        <XAxis dataKey="stt" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="score" stroke="#9999ff" activeDot={{ r: 8 }} />
       
      </LineChart>
    );
  }


export default Chart