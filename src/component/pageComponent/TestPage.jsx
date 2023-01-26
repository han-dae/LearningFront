
import MainHeader from "./Header";
import { Layout, theme } from "antd";
import MainFooter from "./Footer";
import MainBoard from "./MainBoard";
import CarouselComponent from "./CarouselComponent";
import { render } from "@testing-library/react";
import ScrollBottom from "./ScrollBottom";
import { Content, Header } from "antd/es/layout/layout";

import React from 'react'
import { Doughnut } from "react-chartjs-2";


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
                        댓글을 입력해주세요.
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
                    
            <Doughnut/>
            </Content >
            <MainFooter />
        </div>
  )
}

export default TestPage