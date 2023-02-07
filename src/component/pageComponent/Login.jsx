import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import ApiService from "../ApiService";
import MainHeader from "./Header";
import styles from "./Login.css";

const Login = (props) => {
  const [state, setState] = useState({
    user_id: "",
    user_pw: "",
  });

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();
  const LoginUser = (e) => {
    e.preventDefault();

    let User = {
      user_id: state.user_id,
      user_pw: state.user_pw,
    };
    ApiService.loginUser(User.user_id, User.user_pw)
      .then((res) => {
        console.log(res.status);
        console.log(res.data);
        console.log("if통과");
        if(res.data =='/login'){
          alert('로그인실패');
          window.location.reload();
        }else{
          sessionStorage.setItem("info", res.data);
          navigate("/home");
        }
      })
      .catch((err) => {
        console.log("login() 에러", err);
      });
  };
  return (
    <div style={{backgroundColor:'#404040'}} >
      <MainHeader />
      
      <div style={{backgroundColor:'#404040'}}>
      <div
        style={{
          width: "400px",
          position: "absolute",
          height: "300px",
          backgroundColor: "white",
          padding: "30px",
          marginTop: "140px",
          marginLeft: "40vw",
          textAlign: "center",
          boxShadow: "3px 3px 3px grey",
          borderRadius: "30px",
        }}
      >
        <div
          style={{ marginLeft: "50px", textAlign: "left", marginTop: "5vh" }}
        >
          <h2>LOGIN</h2>
          <form>
            <div>
              <label
                className="label"
                style={{
                  marginRight: "75px",
                  padding: "5px",
                  marginBottom: "10vh",
                }}
              >
                ID:
              </label>
              <input
                type="text"
                placeholder="아이디 입력"
                name="user_id"
                value={state.user_id}
                onChange={onChange}
                style={{ padding: "5px", marginBottom: "10px" }}
              />
            </div>

            <div>
              <label
                className="label"
                style={{ marginRight: "20px", padding: "5px" }}
              >
                Password :
              </label>
              <input
                type="password"
                placeholder="비밀번호 입력"
                name="user_pw"
                value={state.user_pw}
                onChange={onChange}
                style={{ padding: "5px" }}
              />
            </div>
            {/* <Button className="btn_login" onClick={this.saveUser} style={{ borderRadius: "20px", width: "100px", float: "right", marginRight: "30px",marginTop :"10px", backgroundColor: "#FE8F8D", color: "white" }}>Save</Button>*/}
            <button
              className="btn_login"
              onClick={LoginUser}
              style={{
                borderRadius: "20px",
                width: "100px",
                float: "right",
                marginRight: "60px",
                marginTop: "10px",
                backgroundColor: "#404040",
                color: "white",
              }}
            >
              Login
            </button>
            <p style={{ fontSize: "14px", marginTop: "10px" }}>
              아직 회원이 아니신가요?
              <a href={"/Join"} >
                <br />
                JOIN
              </a>
            </p>
          </form>
        </div>
      </div>
      </div>
    </div>
  );
};
export default Login;
