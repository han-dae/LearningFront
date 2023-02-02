import React, { useEffect, useState } from "react";
import MainHeader from "./Header";
import { Layout, theme } from "antd";
import MainFooter from "./Footer";
import MainBoard from "./MainBoard";
import CarouselComponent from "./CarouselComponent";
import { render } from "@testing-library/react";
import ApiService from "../ApiService";
import { useNavigate } from "react-router-dom";
import { ButtonLF50, ButtonLF100 } from "./ButtonLF";

import MainComponen from "./MainComponent";
import { Content, Header } from "antd/es/layout/layout";
import Footer from "./Footer";

import styles from "./Login.css";

const MyPage = (props) => {
  // 개인정보 수정
  const [MyTest, setMyTest] = useState({
    category_seq: "",
    reg_dt: "",
    test_cuesheet: "",
    test_photo: "",
    test_price: "",
    test_seq: "",
    test_title: "",
    test_video: "",
    test_video_realname: "",
    user_id: "",
    test_contents: "",
  });

  const [state, setState] = useState({
    user_id: "",
    user_pw: "",
    user_hp: "",
    user_email: "",
  });
  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    ApiService.loadMyTest(sessionStorage.getItem("info"))
      .then((res) => {
        console.log(res.status);
        console.log(res.data);

        console.log(res.data[0]);
        setMyTest(res.data);
      })
      .catch((err) => {
        console.log("loadMyTest 에러", err);
      });
  }, []);
  let testList = Object.values(MyTest);
  const navigate = useNavigate();
  const updateMember = (e) => {
    e.preventDefault();

    let user = {
      user_id: sessionStorage.getItem("info"),
      user_pw: state.user_pw,
      user_hp: state.user_hp,
      user_email: state.user_email,
    };

    ApiService.editUser(user)
      .then((res) => {
        console.log("업데이트완료");
        navigate("/myPage");
      })
      .catch((err) => {
        console.log("updateMember() 에러", err);
      });

    window.location.reload(); // 새로고침
  };
  // 내 댓글 수정

  const [com, setCom] = useState({
    user_id: "",
    cmt_content: "",
    cmt_dt: "",
  })
  let comList = Object.values(com)
  const removeCom = (user_id) => { // 삭제
    setCom(com.filter(com => com.user_id !== user_id));
  };


  // 내 영상 리스트
  const platform = {
    name: "",
    pic: "",
  };

  return (
    <div>
      <MainHeader />

      <Content>
        <div>
          <h1
            style={{
              textUnderlineOffset: "auto",
              marginTop: "2vh",
              marginLeft: "20vw",
            }}
          >
            {" "}
            개인정보수정
          </h1>
        </div>
        <div
          style={{
            marginTop: "0vh",
            marginLeft: "20vw",
            width: "25vw",
            height: "30vh",
            paddingLeft: "10px",
            backgroundColor: "#F7D5D4",
            borderRadius: 20,
            opacity: "1"
          }}
        >
          <div
            className="info_edit"
            style={{
              display: "inline-block",
              width: "100%",
              marginTop: "80px",
            }}
          >
            <div
              style={{
                marginLeft: "18%",
              }}
            >
              <table
                style={{
                  borderSpacing: "10px",
                  marginTop: "-2vh",
                  marginLeft: "-1vw",
                }}
              >
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
                      style={{ padding: "5px" }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label className="label">H.P</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      name="user_hp"
                      //value={}
                      onChange={onChange}
                      placeholder="수정할 H.P 입력"
                      style={{ padding: "5px" }}
                    />
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
              <div
                onClick={updateMember}
                style={{ marginLeft: "11vw", marginTop: "2vh" }}
              >
                <ButtonLF100 value={"정보 수정"} />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1
            style={{
              textUnderlineOffset: "auto",
              marginTop: "-37vh",
              marginLeft: "47vw",
            }}
          >
            내가 쓴 댓글
          </h1>
        </div>
        <div
          style={{
            marginTop: "2.5vh",
            marginLeft: "47vw",
            width: "31.5vw",
            height: "30vh",
            paddingLeft: "10px",
            backgroundColor: "#F7D5D4",

            borderRadius: 20,
          }}
        >
          <div>
            {comList.map((value, idx) => (
              <div key={`${com.user_id}`}>
                <div>
                  <p>{com.user_id}</p>
                  <button
                    onClick={() => removeCom(com.user_id)}
                    className="btn_comDel"
                    style={{ marginLeft: "30vw" }}
                  >
                    X
                  </button>
                </div>
                {com.cmt_content}
              </div>
            ))}
          </div>
          <div
            className="com_edit"
            style={{
              display: "inline-block",
              width: "100%",
              marginTop: "-10px",
            }}
          ></div>
        </div>
        <div>
          <div>
            <h1
              style={{
                display: "inline-block",
                textUnderlineOffset: "auto",
                marginTop: "3vh",
                marginLeft: "20vw",
                marginBottom: "20px",
              }}
            >
              내 영상 확인하기
            </h1>

            <div
              style={{
                float: "right",
                marginRight: "20%",
                marginTop: "3vh",
              }}
            >
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
              width: "80%",
              marginTop: "0px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "block",
                maxHeight: "300px",
                height: "300px",
                backgroundColor: "#f7d5d4",
                marginLeft: "20vw",
                overflowY: "hidden",

              }}
            >
              {testList.map((value, idx) => (
                <div key={idx}
                  style={{
                    display: "inline-block",
                    backgroundColor: "white",
                    width: "300px",
                    height: "250px",
                    marginTop: "25px",
                    marginBottom: "25px",
                    marginLeft: "10px",
                    marginRight: "20px",
                  }}
                >

                  fefswefsf

                  {value.test_seq}

                </div>
              ))}
            </div>
          </div>
        </div>
      </Content>
      <MainFooter />
    </div>
  );
};

export default MyPage;
