import React, { PureComponent, useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import ApiService from '../ApiService';

const LineChart1 = () => {
  let demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';
  const [tf_idf, setTf_idf] = useState({
    tfidf_keyword: "",
    tfidf_value: ""
  });

  useEffect(() => {
    ApiService.design()
      .then((res) => {
        console.log(res.status);
        console.log(res.data);
        setTf_idf(res.data);
      })
      .catch((err) => {
        console.log("design() 에러", err);
      });
  }, []);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={tf_idf}
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
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );

}

export default LineChart1;