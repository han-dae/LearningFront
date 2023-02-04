import React, { useEffect, useState } from "react";

import Category from "./Category";
import MainHeader from "./Header";

import { RightCircleOutlined } from "@ant-design/icons";

import { Link } from "react-router-dom";
import Footer from "./Footer";
import ApiService from "../ApiService";
import { Select } from "antd";
import WordCloud0 from "../../img/wordCloud/wc0.png";
import WordCloud1 from "../../img/wordCloud/wc1.png";
import WordCloud2 from "../../img/wordCloud/wc2.png";
import Chart from "../../component/Chart/LineChart";

const TestComponent = () => {
  const [Category, setCategory] = useState("0");

  const WordCloud = [
    { id: 0, url: WordCloud0 },
    { id: 1, url: WordCloud1 },
    { id: 2, url: WordCloud2 },
  ];

  const [Guide, setGuide] = useState({
    guide_seq: "",
    cuesheet: "",
    design: "",
    price: "",
    used: "",
    category_seq: "",
  });
  
  const [WordCloudNum, setWordCloudNum] = useState("0");
  useEffect(() => {
    ApiService.cuesheet()
      .then((res) => {
        console.log(res.status);
        console.log(res.data);
        setGuide(res.data);
        console.log(res.data[0]);
        sessionStorage.setItem("category_seq", res.data[0].category_seq);
      })
      .catch((err) => {
        console.log("cuesheet() 에러", err);
      });
  },[])

  let cueSheet = Object.values(Guide);
  console.log(cueSheet);

  const onChange = (value) => {
    console.log(`selected ${value}`);
    console.log(cueSheet[value]);
    setCategory(cueSheet[value]);
    setWordCloudNum(value);
  };

  //console.log(Category.cuesheet);
  console.log("이걸로 확인", WordCloudNum);

  console.log(WordCloud[WordCloudNum]);
  let WcUrl = WordCloud[WordCloudNum].url;
  console.log(WcUrl);

  return (
    <div>
      <form>
        <MainHeader />

        <div
          style={{
            marginTop: "20px",
            marginLeft: "20vw",
            width: "31vw",
            height: "5vh",
          
            backgroundColor: "#404040",
            borderRadius: 0,
            textAlign :"center",
            boxShadow: "5px 5px #b4b4b4",
            
          }}
        >
          <div
            className="start"
            style={{
              display: "inline-block",
              width: "100%",
              // textShadow: "2px 2px 2px gray",
              color :"white",
              marginTop :"-20px"
            }}
          >
            <h1> Ex) Cue Sheet</h1>
            
          </div>
        </div>
        <div>
          <Select
            showSearch
            placeholder="카테고리를 선택해주세요"
            optionFilterProp="children"
            onChange={onChange}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={[
              {
                value: 0,
                label: "침구류",
              },
              {
                value: 1,
                label: "이불",
              },
              {
                value: 2,
                label: "의자",
              },
            ]}
            style={{ width: "20vw", marginLeft: "20vw", marginTop: "10px" }}
          />
        </div>

        <div
          className="Chart01"
          style={{
            width: "30vw",
            height: "60vh",
            marginTop: "10px",
            marginLeft: "20vw",
            opacity: "1",
            border: "5px solid #404040",
            borderRight: "none",
            backgroundColor: "white",
            overflowY: "scroll",

            fontSize: "10px",
            color: "black",
            whiteSpace: "pre-wrap",
            padding: "5px 10px 5px 10px",
          }}
        >
          <h3 style={{ fontSize: "16px" }}>{Category.cuesheet}</h3>
        </div>

        <div className="InputCategory" style={{ marginLeft: "52vw" }}>
          <div
            style={{
              position: "absolute",
              color: "white",
              padding: "5px 10px 5px 10px",
             //  borderRadius: "10px",
              display: "inline-block",
              marginLeft: "50px",
              marginTop: "13vh",
              fontSize: "18px",
              fontWeight: "bold",
              backgroundColor: "#404040",
              boxShadow: "5px 5px #b4b4b4",
              width:'30vw',
              height:'4vh'
              
            }}
          >
           <h3 style={{marginTop:'0.5vh', textAlign:'center'}}> Ready Cast에서 단어별 영향을 분석해봤어요. </h3>
          </div>
          <div
            className="WordCloud1"
            style={{
              backgroundImage: `url(${WcUrl})`,
              backgroundRepeat: "no-repeat",
              width: "700px",
              height: "500px",
              marginTop: "-800px",
            }}
          ></div>

          <div className="dataSpace">
            <Chart />

            <div className="chart_dh">
              <div style={{ width: 500, height: 300 }}></div>
            </div>
          </div>
          <Link to={"/test2"}>
            <RightCircleOutlined
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

        <div
          className="testBtn"
          style={{ position: "absolute", bottom: "2vh", right: "40vw" }}
        >
          <Link to={"/test1"}>
            <div
              className="test1"
              style={{
                width: "5vw",
                marginLeft: "35vw",
                marginTop: "7vh",
                borderBottom: "4px solid #0d0d73",
              }}
            ></div>
          </Link>

          <Link to={"/test2"}>
            <div
              className="test2"
              style={{
                width: "5vw",
                marginLeft: "41vw",
                marginTop: "-0.5vh",
                borderBottom: "4px solid gray",
              }}
            ></div>
          </Link>

          <Link to={"/test3"}>
            <div
              className="test3"
              style={{
                width: "5vw",
                marginLeft: "47vw",
                marginTop: "-0.5vh",
                borderBottom: "4px solid gray",
              }}
            ></div>
          </Link>

          <Link to={"/test4"}>
            <div
              className="test4"
              style={{
                width: "5vw",
                marginLeft: "53vw",
                marginTop: "-0.4vh",
                borderBottom: "4px solid gray",
              }}
            ></div>
          </Link>
        </div>
      </form>
      <Footer />
    </div>
  );
};
export default TestComponent;
