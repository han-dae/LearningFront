
import MainHeader from "./Header";
import MainFooter from "./Footer";
import { Button } from "antd";
import { Link } from "react-router-dom";
const TestPage = () => {
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

<<<<<<< HEAD
import React from 'react'
import Twitter from "./Twitter";

const TestPage = () => {
   {/* const platform =
    {
        name: "",
        pic: ""
    }

    const user = {
        user_id: state.user_id,
        user_hp: state.user_hp     
    }
    */} 
    return (
        <div>
            <ScrollBottom />
            <MainHeader />
            <Content>
                    <div className="right">
                    <div
                        className="video"
                        style={{
                            width: "700px",
                            height: "69vh",
                            marginTop: "82px",
                            marginLeft: "15vw",
                            backgroundColor: "gray",
                            borderRadius: 10,
                        }}>
                    </div>
                    <div style={{marginLeft:"15%"}}>
                    <div className="nameSpace" style={{ marginTop: "-15px" ,  marginleft: "15%"}}>
                        <p style={{ fontSize: "24px"}}>
                            [뷰티쓱세일]공동판매구역 랑콤편! 전 구매고객 럭키 박스 증정
                        </p>
                    </div>

                    <div className="userName" style={{ fontSize: "18px", marginleft: "35%", marginTop:"-1%" }}>
                        작성자
                    </div>
                    <div
                        className="telNumber"
                        style={{ width: "20vw", marginLeft: "10%", marginTop: "-1.5%", fontSize: "18px" }}>
                            Tel : 000 - 1234 - 5678
                    </div>
                    <div
                        className="price"
                        style={{ width: "20vw", marginLeft: "37%", marginTop: "-1.5%", fontSize: "25px", fontFamily:"bold"}}>
                            29,900원
                    </div>
                    </div>
                    </div>

                    <div className="left">
                    <div
                        className="img1"
                        style={{
                            width: "350px",
                            height: "25vh",
                            marginTop: "-78.5vh",
                            marginLeft: "53vw",
                            backgroundColor: "gray",
                            borderRadius: 10,
                        }}>
                    </div>
                    <div
                        className="img2"
                        style={{
                            width: "350px",
                            height: "25vh",
                            marginTop: "-25vh",
                            marginLeft: "72vw",
                            backgroundColor: "gray",
                            borderRadius: 10,
                        }}>
                    </div>
                    <div className="prod_info" 
                        style={{
                            fontSize: "18px", 
                            marginLeft: "53vw", 
                            marginTop:"1vh", 
                            width:"713px", 
                            height:"20vh",
                            backgroundColor:"#FFECEC",
                            borderRadius: 10,
                            }}>
                        상품에 대한 설명입니다.
                    </div>

                    <div
                        className="price"
                        style={{ width: "20vw", marginLeft: "53vw", marginTop: "1vh", fontSize: "25px", fontFamily:"bold"}}>
                            가격 : 29,900원
                    </div>

                    <div className="comment" 
                        style={{
                            fontSize: "18px", 
                            marginLeft: "53vw", 
                            marginTop:"1vh", 
                            width:"700px", 
                            height:"25vh",
                            backgroundColor:"#FFECEC",
                            borderRadius: 10,
                            overflowY: "scroll"
                            }}>
                       
                        <input className="com_input"
                        style={{
                            // marginLeft: "53vw", 
                            marginTop:"19.5vh", 
                            width:"668px", 
                            // height:"5vh",
                            backgroundColor:"#FFECEC",
                            borderRadius: 10}} ></input>
                    </div>
                    
                    </div>
            </Content >
            <MainFooter />
        </div>
  )
}

export default TestPage
=======






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
        </div>
      </div>

      <MainFooter />
    </div>
  );
};
export default TestPage;
>>>>>>> 944ff90cacc3996294fbbe3de4a75a65d53828bf
