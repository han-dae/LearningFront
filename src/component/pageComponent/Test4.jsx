import React, { Component } from "react";
import MainHeader from "./Header";
import { Link } from "react-router-dom";
import { Layout, theme } from "antd";
import Background from "./Background";
import MainFooter from "./Footer";
import MainBoard from "./MainBoard";
import CarouselComponent from "./CarouselComponent";
import { render } from "@testing-library/react";
import ScrollBottom from "./ScrollBottom";
import { RightCircleOutlined } from "@ant-design/icons";
// 등록

class Test4 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      test_seq: "",
      test_title: "",
      test_photo: "",
      test_price: "",
      test_cuesheet: "",
      test_video: "",
      test_video_realname: "",
      reg_dt: "",
      user_id: "",
      category_seq: "",
      category_name: "",
    };
  }

  render() {
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
              <h1>Chapter4. 모의 영상 생성</h1>
            </div>
          </div>

          <div
            className="Chart01"
            style={{
              width: "700px",
              height: "50vh",
              marginTop: "10px",
              marginLeft: "20vw",
              backgroundColor: "gray",

              borderRadius: 10,
            }}
          ></div>
          <div
            className="itemContents"
            style={{
              display: "inline-block",
              width: "700px",
              marginLeft: "20vw",
              backgroundColor: "#F7D5D4",
              marginTop: "20px",
              borderRadius :"10px"
            }}
          >
            <div className="nameSpace" style={{ marginTop: "-20px" }}>
              <p style={{fontSize :"24px"}}>
                [뷰티쓱세일]공동판매구역 랑콤편! 전 구매고객 럭키 박스 증정
              </p>
            </div>
            <div className="userName" style={{fontSize : "18px"}}>작성자</div>
            <div
              className="telNumber"
              style={{ width: "20vw", marginLeft: "30%", marginTop: "-21px" ,fontSize : "18px"}}
            >
              Tel : 000 - 1234 - 5678
            </div>
            <div
              className="price"
              style={{ width: "20vw", marginLeft: "70%", marginTop: "-21px",fontSize : "18px" }}
            >
              가격이 적히는 공간
            </div>
          </div>

          <div className="Script">
            <div
              className="ScriptContents"
              style={{
                width: "500px",
                height: "480px",
                marginLeft: "1100px",
                marginTop: "-590px",
                overflowY: "scroll",
                backgroundColor: "greenyellow",
              }}
            ></div>
            <div style={{ marginLeft: "1100px" }}>
              <h3>작성했던 스크립트와 영상을 확인해보세요.</h3>
              <h3>모두 올바르게 작성되었다면 확인을 누르세요.</h3>
            </div>
          </div>

          <div style={{marginLeft :"1100px"}}>
            <form >
            <input type="checkbox" value="agree" name="agreement1" style={{marginLeft:"10px"}}/>개인정보 동의하십니까
            <input type="checkbox" value="agree" name="agreement2" style={{marginLeft:"10px"}}/>영상 정보 공개
            </form>
          </div>
          <Link to={"/testPage"}>
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
        </form>
      </div>
    );
  }
}
export default Test4;
