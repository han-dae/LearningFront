import React, { Component, useEffect, useState } from "react";
import MainHeader from "./Header";
import { Button } from "antd";
import { Link } from "react-router-dom";
import Liked from "./Liked";
import ApiService from "../ApiService";

import Banner0 from "../../img/banner0.png";
import axios from "axios";


const TestList = () => {
  const clicked = () => {
    let info = sessionStorage.getItem('info');
    if (info) {
    } else {
      <Button disabled={true}></Button>
    }
  }
  const [Test, setTest] = useState({
    category_seq: "",
    reg_dt: "",
    test_cuesheet: "",
    test_photo: "",
    test_price: "",
    test_seq: "",
    test_title: "",
    test_video: "",
    test_video_realname: "",
    user_id: "",
    test_content: ""
  });
  
  const video =(data)=>{
    axios.post('/video/file', data, {
      
      baseURL: 'http://localhost:8081/users'
    })
      .then((res) => {
         console.log(res);
      })
      .catch((error) => {
        // 예외 처리
      })
    }
  useEffect(() => {
    ApiService.loadTest()
    .then((res) => {
      console.log(res.status);
      console.log(res.data);
      setTest(res.data);
    })
    .catch((err) => {
      console.log("load() 에러", err);
    });  
  }, 
  []);
  let testList = Object.values(Test);
  //let TestPhoto = (testList[4]).test_photo;

  return (
    <div>
      <MainHeader />

      <div style={{ marginTop: "80px" }}>
        <div
          style={{
            marginBottom: "50px",
            marginLeft: "250px",
            width: "1400px",
            height: "400px",
            backgroundColor: "white",
          }}
        >
          <div className="categoryEx">
            <h1>모의 테스트 리스트</h1>

            <h3 style={{ marginTop: "-25px" }}>
              : 사용자들이 직접 시연한 영상을 볼 수 있습니다.
            </h3>
          </div>


          <Link to={"/test1"}>
            <Button
              style={{
                borderRadius: "20px",
                width: "100px",
                float: "right",
                marginTop: "-50px",
                marginRight: "0%",
                backgroundColor: "#FE8F8D",
                color: "white",
              }}
            >
              업로드
            </Button>
          </Link>
          <div
            className="videoSpace"
            style={{
              padding: "30px 20px 30px 20px",
              width: "1380px",

              backgroundColor: "#f7d5d4",
              borderRadius: "20px",
              display: "inline-block",
              marginBottom: "40px",
              overflow: "visible"
            }}
          >
            {testList.map((value, idx) => (
              <div key={idx} style={{ width: "30%", display: "inline-block", marginLeft: "20px", marginRight: "20px" }}>

                <div className="videoContents" style={{ marginLeft: "15px" }} >
                  {/* 비디오 컨텐츠 넣는곳*/}
                  

                  <div
                    className="liked"
                    style={{ width: "400px", marginLeft: "350px", marginBottom: "0px" ,}}
                  >
                    <Liked />
                  </div>

                  <div
                    style={{

                      width: "400px",
                      height: "300px",
                      backgroundColor: "white",
                      display: "inline-block"
                    }}
                  ><video src={video(value.test_video_realname)}
                  controls autoPlay muted playsInline
                  style={{
                    width: "400px",
                    height: "300px"
                  }}></video>

                  </div>
                  <Link
                    to={"/testPage?test_seq=" + value.test_seq}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <div
                      className="ExSpace"
                      style={{ marginLeft: "10px", width: "380px", marginBottom: "20px" }}
                    >
                      <div className="content" style={{ fontSize: "14px" }}>
                        {value.test_content}
                      </div>

                      <p style={{ fontSize: "20px", height: "45px", fontWeight: "bold" }}>
                        {value.test_title}
                      </p>

                      <div className="userName" style={{ fontSize: "14px" }}>
                        {value.user_id}
                      </div>
                      <div
                        className="telNumber"
                        style={{
                          width: "20vw",
                          marginLeft: "30%",
                          marginTop: "-20px",
                          fontSize: "14px",
                        }}
                      >
                        Tel : 000 - 1234 - 5678
                      </div>
                      <div
                        className="price"
                        style={{
                          width: "20vw",
                          marginLeft: "80%",
                          marginTop: "-20px",
                          fontSize: "14px",
                        }}
                      >
                        {value.reg_dt}
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              //testList.map((value, idx) => (
              //  <h2 key={idx}>
              //    {idx} : {value.test_seq}
              //  </h2>))}
            ))}
          </div>
        </div>
      </div>

      {/**/}
    </div>

  );
};
export default TestList;
