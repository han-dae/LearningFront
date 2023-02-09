import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import ApiService from "../ApiService";
import MainHeader from "./Header";
import styles from "./Login.css";
import login from "../../img/login.png";
 import lock from "../../img/lock.png";
 import { Button } from "antd";

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
          fontSize:"14px",
          width: "400px",
          position: "absolute",
          height: "300px",
          backgroundColor: "white",
          padding: "30px",
          marginTop: "140px",
          marginLeft: "40vw",
          textAlign: "center",
          boxShadow: "4px 3px 3px navy",
          borderRadius: "30px",
        }}
      >
        <div
          style={{ marginLeft: "50px", textAlign: "left", marginTop: "5vh" }}
        >
          <h2 style={{borderRadius: "5px",textAlign:"center", marginRight:"220px", color:"white",background:"gray", marginTop:"0px",fontFamily:'S-CoreDream-6bold'}}>LOGIN</h2>
          <form>
            <div>
            <div
            style={{
              backgroundImage: `url(${login})`,
              backgroundSize: "20px",
              backgroundRepeat: "no-repeat",
              display: "inline-block",
              width: "50px",
              height: "20px",
              marginLeft: "30px",
              marginTop:"15px"
            }}
          ></div>
              <input
                type="text"
                placeholder="아이디 입력"
                name="user_id"
                value={state.user_id}
                onChange={onChange}
                style={{ padding: "8px", marginBottom: "10px" ,width:"200px",height:"18px",fontFamily:'S-CoreDream-3Light' }}
              />
            </div>

            <div>
            <div
            style={{
              backgroundImage: `url(${lock})`,
              backgroundSize: "20px",
              backgroundRepeat: "no-repeat",
              display: "inline-block",
              width: "50px",
              height: "20px",
              marginLeft: "30px",
              marginTop:"5px",
              
            }}
          ></div>
          
              <input
                type="password"
                placeholder="비밀번호 입력"
                name="user_pw"
                value={state.user_pw}
                onChange={onChange}
                style={{ padding: "8px", marginBottom: "10px",height:"18px", width:"200px",fontFamily:'S-CoreDream-3Light'}}
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
                marginRight: "30px",
                marginTop: "30px",
                backgroundColor: "#404040",
                color: "white",
                fontFamily:'S-CoreDream-3Light'
              }}
            >
              Login
            </button>
            
              <Button style={{ borderRadius: "20px", width: "100px", float: "left", marginRight: "30px",marginTop :"29px", backgroundColor: "#404040", color: "white",fontFamily:'S-CoreDream-3Light'}}>
              <a href={"/Join"} >
                JOIN
              </a>
              </Button>
            
          </form>
        </div>
      </div>
      </div>
    </div>
  );
};
export default Login;
