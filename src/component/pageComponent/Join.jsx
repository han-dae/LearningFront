import React, { Component } from "react";
import axios from "axios";
import ApiService from "../ApiService";
import "./Login.css";
import MainHeader from "./Header";
import styles from "./Login.css";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
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
        if(res.data=='su'){
          alert('회원가입 완료');
          window.location.replace("/Login")
        }else{
          alert('회원가입 실패');
          window.location.reload()
        }
      })
      .catch((err) => {
        console.log("saveUser() 에러", err);
      });

     
  };

  render() {
    return (

      <div style={{backgroundColor:'#404040'}}>
         <MainHeader />
       
         <div
          style={{
            fontSize:"14px",
            width: "400px",
            position: "absolute",
            height: "420px",
            backgroundColor: "white",
            padding: "30px",
            marginTop:"140px",
            marginLeft: "40vw",
            textAlign: "left",
            boxShadow :"4px 3px 3px navy",
            borderRadius : "30px"
           
          }}
        >
       
        <div style={{ textAlign: "left" , marginLeft : "50px" }}>
          <div style={{
            textAligh:"center",
            borderRadius: "20px",
            width:"130px",
            marginLeft:"0px",
            backgroundColor: "#404040",
            color: "white" 
          }}>
          <h2 style={{borderRadius: "5px",textAlign:"center", marginRight:"0px", color:"white",background:"gray"}}>JOIN</h2>
          </div>
          <form>
            <table style={{ textAlign: "left" ,borderSpacing: "5px"}}>
              <div>
                <tr style={{ width: "40%" }}>
                 
                    <label className="label" style={{ textAlign: "left" }}>
                      아이디 
                    </label>
                  

                  </tr>
                  <tr>
                    <input
                      type="text"
                      placeholder="id 입력"
                      name="user_id"
                      value={this.state.user_id}
                      onChange={this.onChange}
                      style={{ padding: "5px", width:"270px",borderRadius:"7px" }}
                      
                    />
                    </tr>
               
              </div>

              <div>
                <tr style={{ width: "120px" }}>
                  
                    <label className="label">패스워드 </label>
                  </tr>
                  <tr>
                    <input
                      type="password"
                      placeholder="password 입력"
                      name="user_pw"
                      value={this.state.user_pw}
                      onChange={this.onChange}
                      style={{ padding: "5px", width:"270px",borderRadius:"7px" }}
                    />
                  </tr>
                
              </div>
              
              <div>
                <tr style={{ width: "120px" }}>
                 
                    <label className="label">연락처 </label>
                  </tr>

                  <tr>
                    <input
                      type="text"
                      placeholder="H.P 입력"
                      name="user_hp"
                      value={this.state.user_hp}
                      onChange={this.onChange}
                      style={{ padding: "5px", width:"270px",borderRadius:"7px" }}
                    />
                  </tr>
                
              </div>
              <div>
                <tr style={{ width: "120px" }}>
                  
                    <label className="label">이메일 </label>
                  </tr>
                  <tr>
                    <input
                      type="email"
                      placeholder="Email 입력"
                      name="user_email"
                      value={this.state.user_email}
                      onChange={this.onChange}
                      style={{ padding: "5px", width:"270px",borderRadius:"7px" }}
                    />
                  </tr>
                
              </div>
            </table>

            <Button className="btn_login" onClick={this.saveUser} style={{ borderRadius: "20px", width: "100px", float: "right", marginRight: "30px",marginTop :"40px", backgroundColor: "#404040", color: "white" }}>SUBMIT</Button>
           <Button style={{ borderRadius: "20px", width: "100px", float: "left", marginRight: "30px",marginTop :"40px", backgroundColor: "#404040", color: "white" }}><a href="/Login" >LOGIN</a></Button> 
          </form>
        </div>
        </div>

      </div>
    );
  }
}
export default Join;
