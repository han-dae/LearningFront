import React, { useState } from "react";

import Background from "./Background";
import Category from "./Category";
import MainHeader from "./Header";
import ScrollBottom from "./ScrollBottom";
import InputTextArea from "./TextArea";
import { RightCircleOutlined } from "@ant-design/icons";

import { Link } from "react-router-dom";

const TestComponent2 = () => {
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
            <h1>Chapter2. 상품가격확인</h1>
            <h3 style={{ marginTop: "-25px" }}>
              ReadyCast에서 으로 분석한 결과에요.
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
            backgroundColor: "white",
  
            borderRadius: 10,
          }}
        ></div>
        <div
          className="Chart02"
          style={{
            marginTop: "25px",
            marginLeft: "20vw",
            width: "28vw",
            height: "30vh",
            backgroundColor: "black",
          }}
        ></div>

        <div
          className="InputCategory"
          style={{ marginTop: "-720px", marginLeft: "57vw" }}
        >
          <div style={{ marginBottom: "15px" }}>
           
          </div>
          <InputTextArea />
          <div style={{ marginLeft: "-120px", marginTop: "180px" }}>
            <h3>ReadyCast에서 분석한 결과를 확인해보세요.</h3>
          </div>
          <Link to={"/test3"}>
            <RightCircleOutlined
              style={{
                position : "absolute",
                bottom : "20px",
                marginTop: "0px",
                right : "400px",
                fontSize: "300%",
                color : "black",
              }}
            />
          </Link>
        </div>
      </form>
    </div>
  );
};
export default TestComponent2;
