import Title from 'antd/es/typography/Title';
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
   <div>
    <div style={{position:"absolute",display :"inline-block", marginLeft :"0px",marginTop :"120px"}}><div style={{  width : "40px", height :"30px", backgroundColor :"#ff7f00", }}/><div style={{color :"#ff7f00", fontWeight :"bold"}}>Negative Value</div></div>
    <div style={{position:"absolute", display :"inline-block",marginLeft :"0px",marginTop :"50px"}}><div style={{display :"inline-block", width : "40px", height :"30px", backgroundColor :"#0d0d73"}}/><div style={{color :"#0d0d73", fontWeight :"bold"}}>Positive Value</div></div>
    <BarChart width={500} height={300} data={NegaData}  style={{marginTop :"-300px", marginLeft :"100px"}}>
     
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="tfidf_keyword" style={{color :"white"}}/>
      <YAxis />
      <Tooltip />
      <Bar dataKey="tfidf_value" fill="#ff7f00"/>
     
    </BarChart>
    </div>

);
}


export default NegaLFBar