import React, { Component, useEffect, useState } from "react";
import MainHeader from "./Header";
import { Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import Liked from "./Liked";
import ApiService from "../ApiService";

import Banner0 from "../../img/banner0.png";
import axios from "axios";
import { ButtonLF100 } from "./ButtonLF";

const TestList = () => {
  const navigate = useNavigate();
  const clicked = () => {
    let info = sessionStorage.getItem("info");
    if (info) {
      navigate("/test1");
    } else {
      alert("로그인을 해주세요");
    }
  };
 
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
    test_content: "",
    test_view_count: "",
    test_like_count: ""
  });

  // const video =(data)=>{
  //   axios.post('http://localhost:8081/users/video', data)
  //     .then((res) => {
  //        console.log(res.data);

  //     })
  //     .catch((error) => {
  //       // 예외 처리
  //     })

  //  }
  useEffect(() => {
    
    ApiService.loadTest()
      .then((res) => {
        console.log(res.status);
        console.log(res.data);
        setTest(res.data);
        console.log("setTest결과", Test);
      })
      .catch((err) => {
        console.log("load() 에러", err);
      });
  }, []);

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
          <div className="categoryEx"
            style={{
              marginTop: "-6vh",
              marginLeft: "7vw",
              width: "60vw",
              height: "5vh",
              paddingLeft: "10px",
              backgroundColor: "#404040",
              // borderRadius: 20,
              textAlign: 'center',
              color: 'white',
              boxShadow: "5px 5px #B4B4B4"
            }} >
            <h1>Video List</h1>
            {/*} <div
            style={{
              marginTop: "4vh",
              marginLeft: "0vw",
              width: "35.7vw",
              height: "5vh",
              paddingLeft: "10px",
              backgroundColor: "#404040",
              // borderRadius: 20,
              textAlign:'center',
              color:'white',
              boxShadow :"5px 5px #B4B4B4"
            }}>
            <h3 style={{ marginTop: "-25px" }}>
              : 사용자들이 직접 시연한 영상을 볼 수 있습니다.
            </h3>
          </div>*/}
          </div>

         
            <div onClick={clicked} style={{
            marginTop:'5vh',
            marginLeft:'68vw'
            }}>
            <ButtonLF100 value={'UPLOAD'}> </ButtonLF100>
            </div>
          
          <div
            className="videoSpace"
            style={{
              padding: "30px 20px 30px 20px",
              width: "1380px",

              backgroundColor: "#404040",
              borderRadius: "20px",
              display: "inline-block",
              marginBottom: "40px",
              overflow: "visible",
              marginTop: '5vh'
            }}
          >
            {testList.map((value, idx) => (
              <div
                key={idx}
                style={{
                  width: "30%",
                  display: "inline-block",
                  marginLeft: "20px",
                  marginRight: "20px",
                }}
              >
                <div className="videoContents" style={{ marginLeft: "15px" }}>
                  {/* 비디오 컨텐츠 넣는곳*/}

                  <div
                  // style={{

                  //   width: "400px",
                  //   height: "200px",
                  //   marginBottom:"-100px",
                  //   backgroundColor: "white",
                  //   display: "inline-block"
                  // }}
                  >
                    <video
                      src={`${process.env.PUBLIC_URL}/file/${value.test_video_realname}`}
                      controls
                      autoPlay
                      muted
                      playsInline
                      style={{
                        width: "400px",
                        height: "280px",
                        border:"2px solid gray",
                        opacity:"1"
                      }}
                    >
                      {" "}
                    </video>
                  </div>

                  <Link
                    to={"/testPage?test_seq=" + value.test_seq}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <div
                      className="ExSpace"
                      style={{
                        marginLeft: "10px",
                        width: "380px",
                        marginBottom: "20px",
                      }}
                    >
                      {/*  <div className="content" style={{ fontSize: "14px" }}>
                        {value.test_content}
                      </div>
                      */}
                      <p
                        style={{
                          fontSize: "20px",
                          height: "45px",
                          fontWeight: "bold",
                          marginTop: "0px",
                          color: "white"
                        }}
                      >
                        {value.test_title}
                      </p>

                      <div className="userName" style={{ fontSize: "14px" ,color:"white"}}>
                        작성자 : {value.user_id}
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
                      </div>
                      <div
                        className="price"
                        style={{
                          width: "20vw",
                          marginLeft: "80%",
                          marginTop: "-20px",
                          fontSize: "14px",
                          color:"white"
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

     
    </div>
  );
};
export default TestList;
