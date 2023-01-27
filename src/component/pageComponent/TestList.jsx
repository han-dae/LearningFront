import React from "react";
import MainHeader from "./Header";
import MainFooter from "./Footer";
import { Button } from "antd";
import { Link } from "react-router-dom";
import Liked from "./Liked";
const TestList = () => {
  return (
    <div>
      <MainHeader />
      <div style={{ marginTop: "80px" }}>
        
        <div
          style={{
            marginTop: "0",
            marginLeft: "250px",
            width: "1400px",
            height: "400px",
            backgroundColor: "white",
          }}
        >
          <div className="categoryEx">
            
            <h1>모의 테스트 리스트</h1>
            <h3 style={{ marginTop: "-25px" }}>
              : 사용자들이 직접 시연한 영상을 볼 수 있습니다.
            </h3>
            
          </div>
          <Link to={"/test"}>
          <Button
          style={{ borderRadius: "20px", width: "100px", float: "right", marginTop: "-50px", marginRight: "0%", backgroundColor: "#FE8F8D", color: "white" }}>
          업로드
        </Button>
        </Link>
        
        <Link to={"/testPage"} style={{textDecoration: "none", color:"black"}}>
          <div
            className="videoSpace"
            style={{
              padding: "30px 20px 30px 20px",
              width: "1400px",
              display: "inline-block",
              backgroundColor: "#f7d5d4",
              borderRadius : "20px"
            }}
          >
            <div className="videoContents">
           
              {/* 비디오 컨텐츠 넣는곳*/}
              <div
                style={{
                  width: "400px",
                  height: "300px",
                  backgroundColor: "white",
                }}
              >영상</div>
               
              <div className="ExSpace" style={{ marginLeft :"10px",width: "380px" }}>
                {/* 비디오 설명 넣는곳*/}
                <div className="liked" style={{marginTop :"-310px", float :"right"}}><Liked/></div>
                <p style={{ fontSize: "16px" }}>
                  [뷰티쓱세일]공동판매구역 랑콤편! 전 구매고객 럭키 박스 증정
                </p>

                <div className="userName" style={{ fontSize: "14px" }}>
                  작성자
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
                  Tel : 000 - 1234 - 5678
                </div>
                <div
                  className="price"
                  style={{
                    width: "20vw",
                    marginLeft: "80%",
                    marginTop: "-20px",
                    fontSize: "14px",
                  }}
                >
                  29,900원
                </div>
              </div>
            </div>
          </div>
          </Link>
        </div>
      </div>

      <MainFooter />
    </div>
  );
};
export default TestList;
