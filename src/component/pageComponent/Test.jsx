import React, { useState } from "react";

import Background from "./Background";
import Category from "./Category";
import MainHeader from "./Header";
import ScrollBottom from "./ScrollBottom";
import InputTextArea from "./TextArea";
import { RightCircleOutlined } from "@ant-design/icons";
import WordCloud from "../../img/WordCloud.png";
import { Link } from "react-router-dom";


const TestComponent = () => {
  return (
    <div>
      <form>
        <ScrollBottom />
        <MainHeader />
        <Background />

        <div
          style={{
            marginTop: "-95vh",
            marginLeft: "20vw",
            width: "20vw",
            height: "10vh",
            paddingLeft: "10px",
            backgroundColor: "white",
            borderRadius: 20,
          }}
        >
          <div
            className="start"
            style={{
              display: "inline-block",
              width: "100%",

              marginTop: "-10px",
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
            marginTop: "25px",
            marginLeft: "20vw",
            backgroundColor: "white",
            overflowY: "scroll",
            borderRadius: 10,
          }}
        >

<>
          
          </>
        </div>

        <div
          className="InputCategory"
          style={{ marginTop: "-680px", marginLeft: "52vw" }}
        >
            <div
              style={{
                backgroundImage: `url(${WordCloud})`,
                backgroundRepeat: 'no-repeat',
                width: "500px",
                height: "300px",
                marginTop: "",
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
         <a href="MoreData" style={{marginLeft : "400px"}}>더보기 </a>
         <div style={{width:"500px", height :"300px", marginTop  :"20px",backgroundColor :"white"}}>

         </div>
         
         </div>
          <Link to={"/test2"}>
            <RightCircleOutlined
              style={{
                position: "absolute",
                bottom: "20px",
                marginTop: "0px",
                right: "400px",
                fontSize: "300%",
                color: "black",
              }}
            />
          </Link>
        </div>
      </form>
    </div>
  );
};
export default TestComponent;
