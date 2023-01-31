import React, { useState } from "react";

import MainHeader from "./Header";

import { RightCircleOutlined, LeftCircleOutlined } from "@ant-design/icons";


import { Link } from "react-router-dom";
import TextArea from "antd/es/input/TextArea";
import Footer from "./Footer";
import { BarChart } from "recharts";




const TestComponent2 = () => {
  const [state, setState] = useState({
     test_cuesheet:""
    
  })
  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }
  const cuesheetSave =() =>{
     
    const test_cuesheet = state.test_cuesheet; 
    console.log(test_cuesheet);
    sessionStorage.setItem('cuesheet',test_cuesheet);
    console.log(sessionStorage.getItem('cuesheet'));
  }

  
  return (
    <div>
      <form>
        
        <MainHeader />

        <div
          style={{
            marginTop: "10px",
            marginLeft: "20vw",
            width: "50vh",
            height: "10vh",
            paddingLeft: "10px",
            backgroundColor: "#F7D5D4",
            borderRadius: 20,
          }}
        >
          <div
            className="start"
            style={{
              display: "inline-block",
              width: "50vh",
            }}
          >
            <h1 style={{ marginTop: "1vh" }}>Chapter2. 스크립트 작성</h1>
            <h3 style={{ marginTop: "-25px" }}>
              ReadyCast에서 "카테고리"으로 분석한 결과에요.
            </h3>
          </div>
        </div>
        <div
          className="Chart02"
          style={{
            width: "35vw",
            height: "40vh",
            marginTop: "25px",
            marginLeft: "20vw",

            borderRadius: 10,
          }}
        >
         
        </div>
        <div
          id="chart"
          style={{
            marginTop: "0px",
            marginLeft: "20vw",
            width: "28vw",
            height: "30vh",
            border: "1px solid black",
          }}
        > 
          <BarChart width={500}
        height={400}
        data={data}
        margin={{
          top: 20, right: 80, bottom: 20, left: 20,
        }}/>
        </div>

        <div style={{  marginLeft: "24vw" }}>
          <TextArea
            name="test_cuesheet"
            value={state.test_cuesheet}
            showCount
            maxLength={800}
            style={{
              height: "30vh",
              width: "50vw",
              resize: "none",
              overflowY: "scroll",
            }}
            onChange={onChange}
            placeholder="위 그래프를 토대로 스크립트를 작성해보세요."
          />
        </div>
        <div
          className="InputCategory"
          style={{ marginTop: "-680px", marginLeft: "52vw" }}
        >
          <Link to={"/test"}>
            <LeftCircleOutlined
              style={{
                position: "absolute",
                bottom: "50px",
                marginTop: "0px",
                left: "400px",
                fontSize: "300%",
                color: "black",
              }}
            />
          </Link>
          <Link to={"/test3"}>
            <RightCircleOutlined
            onClick={cuesheetSave}
              style={{
                position: "absolute",
                bottom: "50px",
                marginTop: "0px",
                right: "400px",
                fontSize: "300%",
                color: "black",
              }}
            />
          </Link>
        </div>
        <div className="testBtn" style={{ marginTop:"79vh", position: "absolute", bottom:"2vh", right:"36vw" }}>
          <Link to={"/test1"}>
            <div className='test1'
              style={{
                width: "5vw",
                marginLeft: "35vw",
                marginTop: "7vh",
                borderBottom: "4px solid gray"
              }}></div>
          </Link>

          <Link to={"/test2"}>
            <div className='test2'
              style={{
                width: "5vw",
                marginLeft: "41vw",
                marginTop: "-0.5vh",
                borderBottom: "4px solid #F7D5D4"
              }}></div>
          </Link>

          <Link to={"/test3"}>
            <div className='test3'
              style={{
                width: "5vw",
                marginLeft: "47vw",
                marginTop: "-0.5vh",
                borderBottom: "4px solid gray"
              }}></div>
          </Link>

          <Link to={"/test4"}>
            <div className='test4'
              style={{
                width: "5vw",
                marginLeft: "53vw",
                marginTop: "-0.4vh",
                borderBottom: "4px solid gray"
              }}></div>
          </Link>
        </div>
      </form>
      <Footer/>
    </div>
  );
};
export default TestComponent2;
