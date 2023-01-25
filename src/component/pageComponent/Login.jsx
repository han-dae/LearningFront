import React, { useState } from "react";

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
          
          navigate('/home/');
      })
      .catch(err => {
        console.log("login() 에러", err);
      });

  }
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
          marginTop : "140px",
            marginLeft: "40vw",
            textAlign: "center",
            boxShadow :"10px 10px 10px black",
            borderRadius : "30px"
    
          }}
        >
          <div style={{ marginLeft:"50px",textAlign: "left", marginTop :"5vh" }}>
            <h2>Login</h2>
            <form>
              <div>
                <label className="label" style={{marginRight :"75px" , marginBottom:"10vh"}}>ID:</label>
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
                <label className="label" style={{marginRight :"20px"}}>Password :</label>
                <input
                  type="password"
                  placeholder="비밀번호 입력"
                  name="user_pw"
                  value={state.user_pw}
                  onChange={onChange}
                  style={{ padding: "5px" }}
                />
              </div>
              <button className="btn_login" onClick={LoginUser} >
                Login
              </button>
              아직 회원이 아니신가요?
            <a href={"/Join"}>회원가입</a>
      
            </form>
            
          </div>
        </div>
      </div>
    );

}
export default Login;
