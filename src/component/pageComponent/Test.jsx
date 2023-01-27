import React, { useState } from "react";

import Category from "./Category";
import MainHeader from "./Header";
import ScrollBottom from "./Dont_Touch/ScrollBottom";
import InputTextArea from "./TextArea";
import { RightCircleOutlined } from "@ant-design/icons";
import WordCloud from "../../img/WordCloud.png";
import { Link } from "react-router-dom";
import Footer from "./Footer";


const TestComponent = () => {
  return (
    <div>
      <form>
        
        <MainHeader />


        <div
          style={{
            marginTop: "10px",
            marginLeft: "20vw",
            width: "20vw",
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
              width: "100%",

            }}
          >
            <h1>Chapter1. 스크립트 분석</h1>
            <h3 style={{ marginTop: "-25px" }}>
              높은 조회 수와 매출을 기록한 스크립트에요.
            </h3>
          </div>
        </div>

        <div
          className="Chart01"
          style={{
            width: "30vw",
            height: "70vh",
            marginTop: "10px",
            marginLeft: "20vw",
            backgroundColor: "gray",
            overflowY: "scroll",
            borderRadius: 10,
          }}
        >

          <>

          </>
        </div>

        <div
          className="InputCategory"
          style={{ marginLeft: "52vw" }}
        >
          <div
            style={{
              backgroundImage: `url(${WordCloud})`,
              backgroundRepeat: 'no-repeat',
              width: "500px",
              height: "300px",
              marginTop: "-650px",
            }}
          >

          </div>

          {/*<div style={{ marginBottom: "15px" }}>
        <Category />
          </div>
          <InputTextArea />
          <div style={{ marginLeft: "80px", marginTop: "100px" }}>
            <h3>1. 판매하려는 상품의 카테고리를 골라주세요.</h3>
            <h3>2. 분석 결과를 토대로 본인만의 스크립트를 작성해보세요.</h3>
          </div>*/}

          <div className="dataSpace">
            <a href="MoreData" style={{ marginLeft: "400px" }}>더보기 </a>
            <div style={{ width: "500px", height: "300px", backgroundColor: "white" }}>

            </div>

            <div className="chart_dh">

            </div>
          </div>
          <Link to={"/test2"}>
            <RightCircleOutlined
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

        <div className="testBtn" style={{ position: "absolute", bottom:"2vh", right:"36vw" }}>
          <Link to={"/test1"}>
            <div className='test1'
              style={{
                width: "5vw",
                marginLeft: "35vw",
                marginTop: "7vh",
                borderBottom: "4px solid #F7D5D4"
              }}></div>
          </Link>

          <Link to={"/test2"}>
            <div className='test2'
              style={{
                width: "5vw",
                marginLeft: "41vw",
                marginTop: "-0.5vh",
                borderBottom: "4px solid gray"
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
export default TestComponent;
