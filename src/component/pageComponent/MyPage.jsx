import React, { useState } from "react";
import MainHeader from "./Header";
import { Layout, theme } from "antd";
import Background from "./Background";
import MainFooter from "./Footer";
import MainBoard from "./MainBoard";
import CarouselComponent from "./CarouselComponent";
import { render } from "@testing-library/react";


import MainComponen from "./MainComponent"
import { Content, Header } from "antd/es/layout/layout";
import Footer from "./Footer";
import ScrollBottom from "./ScrollBottom";
import { setTextRange } from "typescript";
import styles from "./Login.css";

const MyPage = () => {
    const { MainBoard, Footer } = Layout;

    const onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    const platform =
    {
        name: "",
        pic: ""
    }
    
    return (
        <div>
            <ScrollBottom />
            <MainHeader />
            
            <Content>
                <div>
                    <h1 style={{
                        textUnderlineOffset: "auto",
                        marginTop: "2vh",
                        marginLeft: "20vw",
                    }}> 개인정보수정
                    </h1>
                </div>
                <div
                    style={{
                        marginTop: "0vh",
                        marginLeft: "20vw",
                        width: "28vw",
                        height: "40vh",
                        paddingLeft: "10px",
                        backgroundColor: "#F7D5D4",
                        borderRadius: 20,
                    }}>
                    <div
                        className="info_edit"
                        style={{
                            display: "inline-block",
                            width: "100%",
                            marginTop: "80px"
                        }}>


                        <div style={{ textAlign: "center" }}>
                            <tr>
                                <td style={{ width: "120px" }}>
                                    <label className="label">ID:</label>
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name="user_id"
                                        //value={}
                                        onChange={onChange}
                                        placeholder="ID를 입력하세요."
                                        style={{ padding: "5px" }} />
                                </td>
                            </tr>

                            <tr>
                                <td style={{ width: "120px" }}>
                                    <label className="label">PW:</label>
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name="user_pw"
                                        //value={}
                                        onChange={onChange}
                                        placeholder="PW를 입력하세요."
                                        style={{ padding: "5px" }} />
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <label className="label">H.P:</label></td>
                                <td>
                                    <input
                                        type="text"
                                        name="user_hp"
                                        //value={}
                                        onChange={onChange}
                                        placeholder="H.P를 입력하세요."
                                        style={{ padding: "5px" }} />
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <label className="label">TEl:</label>
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name="user_email"
                                        //value={}
                                        onChange={onChange}
                                        placeholder="EMAIL을 입력하세요."
                                        style={{ padding: "5px" }}
                                    // vw(view width), vh(view height) // % // px // @css
                                    />

                                </td>
                            </tr>
                            <button className="btn_info_edit">수정</button>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 style={{
                        textUnderlineOffset: "auto",
                        marginTop: "-47.5vh",
                        marginLeft: "50vw",
                    }}>내가 쓴 댓글</h1>
                </div>
                <div
                    style={{
                        marginTop: "0vh",
                        marginLeft: "50vw",
                        width: "28.5vw",
                        height: "40vh",
                        paddingLeft: "10px",
                        backgroundColor: "#F7D5D4",
                        borderRadius: 20,
                    }}>
                    <div
                        className="com_edit"
                        style={{
                            display: "inline-block",
                            width: "100%",
                            marginTop: "-10px"
                        }}>

                    </div>
                </div>
                <div>
                    <h1 style={{
                        textUnderlineOffset: "auto",
                        marginTop: "3vh",
                        marginLeft: "20vw",
                        marginBottom: "0px"
                    }}>내 영상 확인하기</h1>
                    <div
                        style={{
                            marginLeft: "160vh",
                            marginTop: "0vh"
                        }}>
                        <button className="btn_edit" style={{ marginTop: "0vh" }}>EDIT</button>
                        <button className="btn_del" style={{ marginTop: "0vh" }}>DELETE</button>
                    </div>
                </div>
                <div
                // style={{
                // marginTop: "-6vh",
                //  marginLeft: "20vw",
                // width: "58.5vw",
                // height: "30vh",
                // paddingLeft: "10px",
                // backgroundColor: "white",
                // borderRadius: 20,
                // }}
                >
                    <div
                        className="video_edit"
                        style={{
                            display: "inline-block",
                            width: "100%",
                            marginTop: "0px"
                        }}>
                        <div>
                            <div
                                className="Board1"
                                style={{
                                    // position: "absolute",
                                    left: "18%",
                                    backgroundColor: "#F7D5D4",
                                    opacity: 0.5,
                                    width: "18%",
                                    height: "28vh",
                                    borderRadius: 30,
                                    padding: "10px",
                                    display: "inline-block",
                                    marginTop: "0vh",
                                    marginLeft: "20vw"
                                }}
                            >
                                <div
                                    className="title"
                                    style={{ textAlign: "center", fontSize: "25px" }}
                                >
                                    {platform.name}
                                </div>
                            </div>
                            <div
                                className="Board2"
                                style={{
                                    // position: "absolute",
                                    right: "20%",
                                    backgroundColor: "#F7D5D4",
                                    opacity: 0.5,
                                    width: "18%",
                                    height: "28vh",
                                    borderRadius: 30,
                                    padding: "10px",
                                    display: "inline-block",
                                    marginTop: "-7vh",
                                    marginLeft: "1vw"
                                }}
                            >
                                <div
                                    className="title"
                                    style={{ textAlign: "center", fontSize: "25px" }}
                                >{platform.name}</div>

                            </div>
                            <div
                                className="Board3"
                                style={{
                                    // position: "absolute",
                                    right: "20%",
                                    backgroundColor: "#F7D5D4",
                                    opacity: 0.5,
                                    width: "18%",
                                    height: "28vh",
                                    borderRadius: 30,
                                    padding: "10px",
                                    display: "inline-block",
                                    marginTop: "-27vh",
                                    marginLeft: "60vw"
                                }}
                            >
                                <div
                                    className="title"
                                    style={{ textAlign: "center", fontSize: "25px" }}
                                >{platform.name}</div>

                            </div>
                        </div>

                    </div>
                </div>

            </Content>
            <MainFooter />
        </div>
    );
}


export default MyPage;