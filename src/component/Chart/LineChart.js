import React, { PureComponent, useEffect, useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import ApiService from '../ApiService';



const Chart =props=> {

    const [Data, setData] = useState({
        stt_seq: "", 
        stt_keyword: "", 
        stt_tfidf_value: "",
        category_seq: "",
      });

    useEffect(() => {ApiService.review(props.data)
        .then((res1) => {
            console.log("이거야 이거 찾아", props.data);
          console.log(res1.status);
          console.log(res1.data);
          setData(res1.data);
          console.log(res1.data);

        })
        .catch((err) => {
          console.log("review() 에러", err);
        });
    },[props]);
 console.log("시발",props.data);
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
        <XAxis dataKey="stt_keyword" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="stt_tfidf_value" stroke="#9999ff" activeDot={{ r: 8 }} />
       
      </LineChart>
    );
  }


export default Chart