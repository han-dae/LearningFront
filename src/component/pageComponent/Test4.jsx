import React, { Component, useState } from "react";
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
import { useLocation } from "react-router-dom";
// 등록

const Test4 = () => {
  const [state, setState] = useState({
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
})
const onPreview = async (file) => {
  let src = file.url;
  if (!src) {
    src = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file.originFileObj);
      reader.onload = () => resolve(reader.result);
    });
  }
};



const location = useLocation();
const test_cuesheet =location.state.test_cuesheet; 
const test_price = location.state.test_price;
const test_photo = location.state.test_photo;
const test_title = location.state.test_title;
const test_video = location.state.test_video;
console.log('큐시트',test_cuesheet);
console.log('포토',test_photo);
console.log('가격',test_price);
console.log('제목',test_title);
console.log('영상',test_video);

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
      >
        {/* {...onPreview(test_video)} */}
      </div>
      <div
        className="itemContents"
        style={{
          display: "inline-block",
          width: "700px",
          marginLeft: "20vw",
          backgroundColor: "gray",
          marginTop: "20px",
        }}
      >
        <div className="nameSpace" style={{ marginTop: "-20px" }}>
          <h3>
            {test_title}
          </h3>
        </div>
        <div className="userName">작성자 : {sessionStorage.getItem('info')}</div>
        <div
          className="telNumber"
          style={{ width: "20vw", marginLeft: "30%", marginTop: "-21px" }}
        >
          Tel : 000 - 1234 - 5678
        </div>
        <div
          className="price"
          style={{ width: "20vw", marginLeft: "70%", marginTop: "-21px" }}
        >가격{test_price}
        </div>
      </div>

      <div className="Script">
        <div
          className="ScriptContents"
          style={{
            width: "500px",
            height: "480px",
            marginLeft: "1100px",
            marginTop: "-570px",
            overflowY: "scroll",
            backgroundColor: "greenyellow",
          }}
        >{test_cuesheet}

        </div >
        <div style={{ marginLeft: "1100px", }}
        ><h3>작성했던 스크립트와 영상을 확인해보세요.</h3>
          <h3>모두 올바르게 작성되었다면 확인을 누르세요.</h3>
        </div>
      </div>

      <Link to={"/testPage"}>
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
    </form>
  </div>
);
}

export default Test4;
