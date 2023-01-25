

import React, { Component } from "react";
import axios from "axios";
import ApiService from "../ApiService";
import "./Login.css";
class Join extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user_id: "",
      user_pw: "",
      user_hp : "",
      user_email:""
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
      user_hp : this.state.user_hp,
      user_email : this.state.user_email
      
    };
    ApiService.addUser(user)
       .then((res) => {
        console.log("완료")
       })
       .catch((err) => {
         console.log("saveUser() 에러", err);
       });
 
  window.location.reload();
  
  };

  render() {
    return (
      <div style={{textAlign : "center"}}>
        <h2>Join</h2>
        <form><table style={{textAlign : "center"}}>
          <div>
            <tr >
             <td style={{width:"40%"}}>
            <label className="label" style={{textAlign:"left"}}>ID :</label></td>   
            
            <td>
            <input
              type="text"
              placeholder="이름 입력"
              name="user_id"
              value={this.state.user_id}
              onChange={this.onChange} style={{padding : "5px"}}
            /></td>
          </tr>
          </div>
          
          <div>
          <tr>
            <td style={{width:"120px"}}><label className="label">Password :</label></td>
            <td>
            <input
              type="password"
              placeholder="비밀번호 입력"
              name="user_pw"
              value={this.state.user_pw}
              onChange={this.onChange} style={{padding : "5px"}}
            /></td>
          </tr>
          </div>
          <tr>
          {/* <div>
            <td style={{width:"120px"}}><label className="label">비밀번호 확인 :</label></td>
            <td>
            <input
              type="password"
              placeholder="비밀번호 확인"
              name="pw"
              value={this.state.pw}
              onChange={this.onChange} style={{padding : "5px"}}
            />
            </td>
          </div> */}
          </tr>
          <div>
            <tr><td style={{width:"120px"}}>
            <label className="label">H.P :</label></td>
            
            <td><input
              type="text"
              placeholder="전화번호 입력"
              name="user_hp"
              value={this.state.user_hp}
              onChange={this.onChange} style={{padding : "5px"}}
            /></td>
            </tr>
          </div>
          <div>
            <tr><td style={{width:"120px"}}>
            <label className="label">email :</label></td>
            <td><input
              type="email"
              placeholder="이메일 입력"
              name="user_email"
              value={this.state.user_email}
              onChange={this.onChange} style={{padding : "5px"}}
            /></td>
            </tr>
          </div>
          </table>
          
          <button className="btn_join" onClick={this.saveUser}>JOIN</button>
          
        </form>
      </div>
    );
  }
}
export default Join;
