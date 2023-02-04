import React, { useState } from "react";

import MainHeader from "./Header";

import { RightCircleOutlined, LeftCircleOutlined } from "@ant-design/icons";


import { Link } from "react-router-dom";
import TextArea from "antd/es/input/TextArea";
import Footer from "./Footer";
import { BarChart } from "recharts";
import LFBarChart from "../Chart/LFBarChart";

// function bed (){
//   function bedreview(){
//     var bed = [];
//     for(var i =0; i<bed.length; i++){
//       bed.length.push()
//     }
//     return bed
//   }
// }

// useEffect(() => {
//   ApiService.bed()
//     .then((res) => {
//       console.log(res.status);
//       console.log(res.data);
//       setBed(res.data);
//       console.log(res.data[0]);
//     })
//     .catch((err) => {
//       console.log("bed() 에러", err);
//     });
// }, []);

const TestComponent2 = () => {
  const [state, setState] = useState({
    test_cuesheet: ""

  })
  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }
  const cuesheetSave = () => {

    const test_cuesheet = state.test_cuesheet;
    console.log(test_cuesheet);
    sessionStorage.setItem('cuesheet', test_cuesheet);
    console.log(sessionStorage.getItem('cuesheet'));
  }


  return (
    <div>
      <form>

        <MainHeader />

        <div
          style={{
            mmarginTop: "20px",
            marginLeft: "20vw",
            width: "31vw",
            height: "5vh",   
            backgroundColor: "#404040",
            borderRadius: 0,
            textAlign :"center",
            boxShadow: "5px 5px #b4b4b4",
            marginTop:'2vh'
          }}
        >
          <div
            className="start"
            style={{
              display: "inline-block",
              width: "50vh",
             // textShadow: "2px 2px 2px gray",
              color: "white",
              textAlign:'center'
            }}
          >
            <h1 style={{marginTop:'0vh'}}> Create Cue Sheet </h1>
            <div
              style={{
                position: "absolute",
                color: "white",
                padding: "5px 10px 5px 10px",
                // borderRadius: "10px",
                display: "inline-block",
                marginLeft: "-15vw",
                marginTop: "36vh",
                fontSize: "18px",
                fontWeight: "bold",
                backgroundColor: "#404040",
                boxShadow: "5px 5px #b4b4b4",
                width:'29.5vw'

              }}
            >
              분석결과를 바탕으로 큐시트를 작성해보세요.
            </div>


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

        <LFBarChart />

        <div style={{ marginLeft: "19.5vw" }}>
          <TextArea
            name="test_cuesheet"
            value={state.test_cuesheet}
            showCount
            maxLength={800}
            style={{
              height: "30vh",
              width: "60vw",
              resize: "none",
              overflowY: "scroll",
              marginTop:'1vw',
              marginLeft:'1vw'
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
                left: "10vw",
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
                right: "10vw",
                fontSize: "300%",
                color: "black",
              }}
            />
          </Link>
        </div>
        <div className="testBtn" style={{ marginTop: "79vh", position: "absolute", bottom: "2vh", right: "40vw" }}>
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
                borderBottom: "4px solid #0d0d73"
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
      <Footer />
    </div>
  );
};
export default TestComponent2;
