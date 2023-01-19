import React, { Component } from "react";
import Join from "./Join";

import { Link, useNavigate } from "react-router-dom";
import ApiService from "../ApiService";
import MainHeader from "./Header";
import Background from "./Background";
import styles from "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user_id: "",
      user_pw: "",
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  LoginUser = (e) => {
    e.preventDefault();

    let User = {
      id: this.state.user_id,
      pw: this.state.user_pw,
    };
    ApiService.loginUser(User.id, User.pw)
      .then((res) => {
        let home_login = res.data;
        console.log(res.status);
        //console.log("완료");
        if (res.status == 200) {
          console.log("if통과");
        } else {
          <Link to="/login"></Link>;
        }
      })
      .catch((err) => {
        console.log("login() 에러", err);
      });
  };
  render() {
    return (
      <div>
        <MainHeader />
        <Background />
        <div
          style={{
            width: "400px",
            position: "absolute",
            height: "560px",
            backgroundColor: "white",
            padding: "30px",
            marginTop: "-90vh",
            marginLeft: "40vw",
            textAlign: "center",
            transition: "0.1s linear",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <h2>Login</h2>
            <form>
              <div>
                <label className="label">ID:</label>
                <input
                  type="text"
                  placeholder="이름 입력"
                  name="user_id"
                  value={this.state.user_id}
                  onChange={this.onChange}
                  style={{ padding: "5px" }}
                />
              </div>

              <div>
                <label className="label">Password :</label>
                <input
                  type="password"
                  placeholder="비밀번호 입력"
                  name="user_pw"
                  value={this.state.user_pw}
                  onChange={this.onChange}
                  style={{ padding: "5px" }}
                />
              </div>
              <button className="btn_login" onClick={this.LoginUser}>
                Login
              </button>
            </form>
            <Join />
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
