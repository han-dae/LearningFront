

import React, { Component } from "react";
import axios from "axios";
import "./Login.css";
class Join extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      hp : "",
      email:""
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
      username: this.state.username,
      password: this.state.password,
      hp : this.state.hp,
      email : this.state.email
      
    };
    
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
              name="id"
              value={this.state.id}
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
              name="pw"
              value={this.state.pw}
              onChange={this.onChange} style={{padding : "5px"}}
            /></td>
          </tr>
          </div>
          <tr>
          <div>
            <td style={{width:"120px"}}><label className="label">비밀번호 확인 :</label></td>
            <td>
            <input
              type="password"
              placeholder="비밀번호 입력"
              name="password"
              value={this.state.password}
              onChange={this.onChange} style={{padding : "5px"}}
            />
            </td>
          </div>
          </tr>
          <div>
            <tr><td style={{width:"120px"}}>
            <label className="label">H.P :</label></td>
            
            <td><input
              type="text"
              placeholder="전화번호 입력"
              name="hp"
              value={this.state.hp}
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
              name="email"
              value={this.state.email}
              onChange={this.onChange} style={{padding : "5px"}}
            /></td>
            </tr>
          </div>
          </table>
          
          <button className="save" onClick={() => {
                 this.saveUser(); // 순서 조정
                 alert("회원가입이 완료되었습니다.");
                 window.location.reload();
                  }}>Save
          </button>
          
        </form>
      </div>
    );
  }
}
export default Join;
