import React, { Component } from "react";
import axios from "axios";
import ApiService from "../ApiService";
import "./Login.css";
import Background from "./Background";
import MainHeader from "./Header";
import styles from "./Login.css";
import { Button } from "antd";
class Join extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user_id: "",
      user_pw: "",
      user_hp: "",
      user_email: "",
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  saveUser = (e) => {
    e.preventDefault();

    let user = {
      user_id: this.state.user_id,
      user_pw: this.state.user_pw,
      user_hp: this.state.user_hp,
      user_email: this.state.user_email,
    };
    ApiService.addUser(user)
      .then((res) => {
        console.log("완료");
      })
      .catch((err) => {
        console.log("saveUser() 에러", err);
      });

    window.location.reload();
  };

  render() {
    return (

      <div>
         <MainHeader />
       
         <div
          style={{
            width: "400px",
            position: "absolute",
            height: "300px",
            backgroundColor: "#F7D5D4",
            padding: "30px",
       marginTop:"140px",
            marginLeft: "40vw",
            textAlign: "left",
            boxShadow :"10px 10px 10px black",
            borderRadius : "30px"
           
          }}
        >
       
        <div style={{ textAlign: "left" , marginLeft : "50px" }}>
          <h2>회원가입</h2>
          <form>
            <table style={{ textAlign: "left" }}>
              <div>
                <tr>
                  <td style={{ width: "40%" }}>
                    <label className="label" style={{ textAlign: "left" }}>
                      ID :
                    </label>
                  </td>

                  <td>
                    <input
                      type="text"
                      placeholder="아이디 입력"
                      name="user_id"
                      value={this.state.user_id}
                      onChange={this.onChange}
                      style={{ padding: "5px" }}
                    />
                  </td>
                </tr>
              </div>

              <div>
                <tr>
                  <td style={{ width: "120px" }}>
                    <label className="label">Password :</label>
                  </td>
                  <td>
                    <input
                      type="password"
                      placeholder="비밀번호 입력"
                      name="user_pw"
                      value={this.state.user_pw}
                      onChange={this.onChange}
                      style={{ padding: "5px" }}
                    />
                  </td>
                </tr>
              </div>
              <tr>
           
              </tr>
              <div>
                <tr>
                  <td style={{ width: "120px" }}>
                    <label className="label">H.P :</label>
                  </td>

                  <td>
                    <input
                      type="text"
                      placeholder="전화번호 입력"
                      name="user_hp"
                      value={this.state.user_hp}
                      onChange={this.onChange}
                      style={{ padding: "5px" }}
                    />
                  </td>
                </tr>
              </div>
              <div>
                <tr>
                  <td style={{ width: "120px" }}>
                    <label className="label">email :</label>
                  </td>
                  <td>
                    <input
                      type="email"
                      placeholder="이메일 입력"
                      name="user_email"
                      value={this.state.user_email}
                      onChange={this.onChange}
                      style={{ padding: "5px" }}
                    />
                  </td>
                </tr>
              </div>
            </table>

            <Button className="btn_login" onClick={this.saveUser} style={{ borderRadius: "20px", width: "100px", float: "right", marginRight: "30px",marginTop :"10px", backgroundColor: "#FE8F8D", color: "white" }}>Save</Button>
            <p style={{fontSize :"14px"}}><a href="/Login">로그인</a> 페이지로 돌아가기</p>
          </form>
        </div>
        </div>

      </div>
    );
  }
}
export default Join;
