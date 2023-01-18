import React, { Component } from "react";
import Join from "./Join";
import { Link } from "react-router-dom";
import ApiService from "../ApiService";
import MainHeader from "./Header";
import Background from "./Background";
import styles from "./Login.css";
class Login extends Component {
  constructor(props){
    super(props);
    this.state={
        id :"",
        pw : ""
    };
}


  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  LoginUser = (e) => {
    e.preventDefault();

    let LoginUser = {

      id : this.state.id,
      pw: this.state.pw      
    };
    ApiService.loginUser(LoginUser)
    .then((res =>{
        this.props.history.push("/users");
    })
    ).catch((err) => {
        console.log("저장시 에러");
    });
  };

  render() {
    return (<div><MainHeader/>
        <Background />
        <div style={{width : "400px"
        ,position : "absolute"
        ,height : "560px",
        backgroundColor:"white",
        padding : "30px",
        marginTop:"-90vh",
    marginLeft:"40vw",
        textAlign:"center",
   transition : "0.1s linear"
        }}>

        
      <div style={{textAlign:"center" }}>
        <h2>Login</h2>
        <form>
          <div>
            <label className="label">ID:</label>
            <input
              type="text"
              placeholder="이름 입력"
              name="us"
              value={this.state.id}
              onChange={this.onChange}
             style={{padding : "5px"}}/>
          </div>

          <div>
            <label className="label">Password :</label>
            <input
              type="password"
              placeholder="비밀번호 입력"
              name="pw"
              value={this.state.pw}
              onChange={this.onChange} style={{padding : "5px"}}
            />
          </div>
         <Link to={"/home"}>
          <button className="btn_login" onClick={this.LoginUser}>Login</button>
          </Link>
        </form>
        <Join/>
      </div>
      </div>
 
      </div>
      
    );
  }
}
export default Login;
