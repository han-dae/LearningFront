import React, {useState}from "react";
import {  Button, Layout, Menu,  } from 'antd';
import { Link } from "react-router-dom";


const Logininfo = () => {
    const info1 = sessionStorage.getItem('info');
    console.log(info1);
    //  const[userInfo, setUserInfo] = useState({
    //      user_id: info1.user_id,
    //      user_pw: info1.user_pw,
    //  })
    // console.log('아이디'+info1.user_id);
    // console.log('비번'+info1.user_pw);
    if (info1 == null){
      return (
      <Link to="/Login">
           <Button
           style={{borderRadius :"20px",width :"100px",float : "right", marginTop : "-40px", marginRight: "12%", backgroundColor : "#FE8F8D", color : "white"}}>
              로그인
            </Button>
            </Link>
    )}else{
      return( 
      <Link to="/MyPage">
           <Button
           style={{float : "right", marginTop : "-40px", marginRight: "12%", backgroundColor : "#FE8F8D", color : "white"}}>
              마이페이지
            </Button>
            </Link>
      )
          }
}
export default Logininfo;