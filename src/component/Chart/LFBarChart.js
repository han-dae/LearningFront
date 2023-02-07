import React, { PureComponent, useEffect, useState } from 'react';
import {
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar,
} from 'recharts';
import ApiService from '../ApiService';



const LFBar = props => {
  const [PosiData, setPosiData] = useState({
    category_seq: "",
    tfidf_category: "",
    tfidf_keyword: "",
    tfidf_posinega: "",
    tfidf_seq: "",
    tfidf_value: "",
  });
 



  useEffect(() => {
   
    ApiService.posiBarChart(props.data)
      .then((res1) => {
        console.log("이거야 이거 찾아", props.data);
        console.log(res1.status);
        setPosiData(res1.data);



      })
      .catch((err) => {
        console.log("posiBar) 에러", err);
      });
  }, [props]);
  console.log("시발", props.data);
  return (
   
    <BarChart  width={500} height={300} data={PosiData} style={{marginLeft :"850px"}}>
      <CartesianGrid strokeDasharray="2 2" />
      <XAxis dataKey="tfidf_keyword" fill="black"/>
      <YAxis />
      <Tooltip />
 
      <Bar dataKey="tfidf_value" fill="#0d0d73" />
    </BarChart>
   

);
}


export default LFBar