import React, { PureComponent, useEffect, useState } from 'react';
import {
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar,
} from 'recharts';
import ApiService from '../ApiService';



const NegaLFBar = props => {
  
  const [NegaData, setNegaData] = useState({
    category_seq: "",
    tfidf_category: "",
    tfidf_keyword: "",
    tfidf_posinega: "",
    tfidf_seq: "",
    tfidf_value: "",
  });



  useEffect(() => {
    ApiService.negaBarChart(props.data)
      .then((res1) => {
        console.log("이거야 이거 찾아", props.data);
        console.log(res1.status);
        setNegaData(res1.data);



      })
      .catch((err) => {
        console.log("negaBar) 에러", err);
      });
   
  }, [props]);
  console.log("시발", props.data);
  return (
   
    <BarChart width={600} height={300} data={NegaData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="tfidf_keyword" />
      <YAxis />
      <Tooltip />

      <Bar dataKey="tfidf_value" fill="blue" />
     
    </BarChart>
   

);
}


export default NegaLFBar