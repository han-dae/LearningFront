import React, { useState } from "react";
import MainHeader from "./Header";
import { Layout, theme } from "antd";
import MainFooter from "./Footer";
import MainBoard from "./MainBoard";
import CarouselComponent from "./CarouselComponent";
import { render } from "@testing-library/react";
import ApiService from "../ApiService";
import { useNavigate } from "react-router-dom";
import { ButtonLF50, ButtonLF100 } from "./ButtonLF";

import MainComponen from "./MainComponent"
import { Content, Header } from "antd/es/layout/layout";
import Footer from "./Footer";
import ScrollBottom from "./Dont_Touch/ScrollBottom";
import { setTextRange } from "typescript";
import styles from "./Login.css";

const MyPage = (props) => {
    // 개인정보 수정
    const [state, setState] = useState({
        user_id: "",
        user_pw: "",
        user_hp: "",
        user_email: ""
    })
    const onChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }
    const navigate = useNavigate();
    const updateMember = (e) => {
        e.preventDefault();

        let user = {
            user_id: sessionStorage.getItem('info'),
            user_pw: state.user_pw,
            user_hp: state.user_hp,
            user_email: state.user_email,
        };

        ApiService.editUser(user)
            .then((res) => {
                console.log("업데이트완료");
                navigate('/myPage');
            })
            .catch((err) => {
                console.log("updateMember() 에러", err);
            });

        window.location.reload(); // 새로고침
    };
    // 내 댓글 수정
    const [com, setCom] = useState([])
    const removeCom = (user_id) => { // 삭제
        return setCom(com.filter((com) => com.id !== user_id));
    };


    // 내 영상 리스트
    const platform =
    {
        name: "",
        pic: ""
    }

    const btnStlyed = {
        borderRadius: "20px",
        width: "50px",
        float: "right",
        marginRight: "60px",
        //  marginTop: "10px",
        backgroundColor: "#FE8F8D",
        color: "white",
        border: 'white'
    }
    return (
        <div>

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
                        <div style={{
                            marginLeft: "18%"
                        }}>
                            <table style={{ borderSpacing: "10px" }}>
                                <tr>
                                    <td style={{ width: "120px" }}>
                                        <label className="label">PW</label>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            name="user_pw"
                                            //value={}
                                            onChange={onChange}
                                            placeholder="수정할 PW 입력"
                                            style={{ padding: "5px" }} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className="label">H.P</label></td>
                                    <td>
                                        <input
                                            type="text"
                                            name="user_hp"
                                            //value={}
                                            onChange={onChange}
                                            placeholder="수정할 H.P 입력"
                                            style={{ padding: "5px" }} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className="label">EMAIL</label>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            name="user_email"
                                            //value={}
                                            onChange={onChange}
                                            placeholder="수정할 Email 입력"
                                            style={{ padding: "5px" }}
                                        />
                                    </td>
                                </tr>
                            </table>
                            <div onClick={updateMember} style={{ marginLeft: "47%" }}>
                                <ButtonLF100 value={"정보 수정"} />
                            </div>
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
                        opacity: 0.5,
                        borderRadius: 20,
                    }}>
                    <div>

                        <div key={`${com.user_id}`}>
                            <div>
                                <p>{com.userName}</p>
                                <button onClick={() => removeCom(com.id)} className="btn_comDel" style={{ marginLeft: '27vw' }}>X</button>
                            </div>
                            {com.content}
                        </div>

                    </div>
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
                    <div>

                        <h1 style={{
                            display: 'inline-block',
                            textUnderlineOffset: "auto",
                            marginTop: "3vh",
                            marginLeft: "20vw",
                            marginBottom: "0px"
                        }}>내 영상 확인하기</h1>
                        <div
                            style={{
                                float: "right",
                                marginRight: "20%",
                                marginTop: "3vh"
                            }}>
                            <ButtonLF50 value={"수정"} />
                            <ButtonLF50 value={"삭제"} />
                        </div>
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
                                    height: "25vh",
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
                                    height: "25vh",
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
                                    height: "25vh",
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