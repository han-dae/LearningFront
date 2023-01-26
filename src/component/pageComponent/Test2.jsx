import React, { useState } from "react";

import MainHeader from "./Header";
import ScrollBottom from "./ScrollBottom";

import { RightCircleOutlined, LeftCircleOutlined } from "@ant-design/icons";
import Img1 from "../../img/graph1.png";
import Img2 from "../../img/graph2.png";

import { Link } from "react-router-dom";

const TestComponent2 = () => {
  return (
    <div>
      <form>
        <ScrollBottom />
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

            borderRadius: 10,
          }}
        >
          <img src={Img1} style={{ width: "1100px", height: "350px" }} />
        </div>
        <div
          className="Chart02"
          style={{
            marginTop: "0px",
            marginLeft: "20vw",
            width: "28vw",
            height: "30vh",
            backgroundColor: "black",
          }}
        >
          <img src={Img2} style={{ width: "1100px", height: "300px" }} />
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
      </form>
    </div>
  );
};
export default TestComponent2;
