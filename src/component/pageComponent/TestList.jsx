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
            height: "100px",
            backgroundColor: "white",
          }}
        >
          <div className="categoryEx"
            style={{
              marginTop: "-6vh",
              width: "360px",
              height: "45px",
              backgroundColor: "#404040",
              borderRadius: "5px",
              textAlign: 'center',
              color: 'white',
              boxShadow: "5px 5px #B4B4B4"
            }} >
            <h1 style={{fontFamily:'S-CoreDream-4Regular'}}>Video List</h1>
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

         
           
          <div
            className="videoSpace"
            style={{
              padding: "10px 20px 10px 20px",
              width: "1380px",

              backgroundColor: "#404040",
              borderRadius: "15px",
              display: "inline-block",
              marginBottom: "40px",
              overflow: "visible",
              marginTop: '5vh'
            }}
          >
             <div onClick={clicked} style={{
            padding:'10px 15px 15px 15px',
            marginLeft:'64vw'
            }}>
            <ButtonLF100 value={'UPLOAD'}> </ButtonLF100>
            </div>
          
            {testList.map((value, idx) => (
              <div
                key={idx}
                style={{
                  width: "30%",
                  display: "inline-block",
                  margin : "20px",
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
                          marginBottom:"0px",
                          marginTop: "0px",
                          color: "white",
                          fontFamily:'S-CoreDream-3Light'
                        }}
                      >
                        {value.test_title}
                      </p>

                      <div className="userinfo" style={{ fontSize: "14px" ,color:"white", fontFamily:'S-CoreDream-1Thin'}}>
                        작성자 : {value.user_id}
                        <div
                        className="upload_date"
                        style={{
                          width: "80px",
                          marginLeft: "87%",
                          marginTop: "-20px",
                          fontSize: "14px",
                          color:"white",
                          fontFamily:'S-CoreDream-1Thin'
                        }}
                      >
                        {value.reg_dt}
                      </div>
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
