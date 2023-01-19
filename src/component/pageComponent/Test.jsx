
import React, { useState } from "react";

import Background from "./Background";
import Category from "./Category";
import MainHeader from "./Header";
import ScrollBottom from "./ScrollBottom";
import InputTextArea from "./TextArea";
import axios from "axios";

const TestComponent = () => {

  saveFile = (e) => {
    e.preventDefault();

    let file ={
      filename : this.state.filename,
      fileUrl : this.state.fileUrl
    }
  }
  ApiService.saveFile(file)
  .then((res) => {
    this.setFile({
      filename : this.filename,
      fileUrl : this.fileUrl
    })
    
  })
const fileShow = (props) =>{
  return (
    <>
    <div style={{backgroundImage : "{}"}}></div></>
  )
}

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
          <div className="Chart01"
            style={{
              width: "35vw",
              height: "40vh",
              marginTop : "25px",
              marginLeft : "20vw",
              backgroundColor: "white",
              overflowY: "scroll",
              borderRadius : 10
            }}
          ></div>
          <div className="Chart02"
            style={{
              marginTop: "25px",
              marginLeft : "20vw",
              width: "28vw",
              height: "30vh",
              backgroundColor: "black",
            }}
          >
            
          </div>
          
          <div className="InputCategory" style={{marginTop : "-710px", marginLeft:"57vw"}}>
            <div style={{marginBottom : "15px"}}>
            <Category/></div>
            <InputTextArea/>
            </div>
      <Link to={"/Mainservice2"}>
      <button>next</button>
      </Link>
</form>
    </div>
  );
};
export default TestComponent;
