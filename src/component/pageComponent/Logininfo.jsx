import React, { useState } from "react";
import { Button, Layout, Menu, } from 'antd';
import { Link } from "react-router-dom";


const Logininfo = () => {
  const logout = () => {
    console.log('로그아웃클릭')
    sessionStorage.clear();
    window.location.reload();

  }
  const info1 = sessionStorage.getItem('info');

  if (info1 == null) {
    return (
      <Link to="/Login">
        <Button
          style={{ borderRadius: "20px", width: "100px", float: "right", marginTop: "-40px", marginRight: "12%", backgroundColor: "#FE8F8D", color: "white" }}>
          로그인
        </Button>
      </Link>
    )
  } else {
    return (
      <div>
        <Link to="/MyPage">
          <Button
            style={{ borderRadius: "20px", width: "100px", float: "right", marginTop: "-40px", marginRight: "12%", backgroundColor: "#FE8F8D", color: "white" }}>
            마이페이지
          </Button>
        </Link>
        <Button onClick={logout}
          style={{ borderRadius: "20px", width: "100px", float: "right", marginTop: "-40px", marginRight: "18%", backgroundColor: "#FE8F8D", color: "white" }}>
          로그아웃
        </Button>
      </div>
    )
  }



}
export default Logininfo;