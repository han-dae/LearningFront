import React, { useState } from "react";
import Join from "./Join";
import {  useNavigate } from "react-router-dom";
import ApiService from "../ApiService";
import MainHeader from "./Header";
import Background from "./Background";
import styles from "./Login.css";

const Login = (props) => {
  const [state, setState] = useState({
    user_id :"",
    user_pw :""
  })

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  const navigate = useNavigate();
  const LoginUser = (e) => {
    e.preventDefault();

    let User = {
      user_id: state.user_id,
      user_pw: state.user_pw,
    };
    ApiService.loginUser(User.user_id, User.user_pw)
      .then(res => {
        console.log(res.status);
        console.log(res.data);
          console.log("if통과");
          navigate('/home/${res.data}');
      })
      .catch(err => {
        console.log("login() 에러", err);
      });

  }
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
                  value={state.user_id}
                  onChange={onChange}
                  style={{ padding: "5px" }}
                />
              </div>

              <div>
                <label className="label">Password :</label>
                <input
                  type="password"
                  placeholder="비밀번호 입력"
                  name="user_pw"
                  value={state.user_pw}
                  onChange={onChange}
                  style={{ padding: "5px" }}
                />
              </div>
              <button className="btn_login" onClick={LoginUser}>
                Login
              </button>
            </form>
            <Join />
          </div>
        </div>
      </div>
    );

}
export default Login;
