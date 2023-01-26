import React from "react";
import { Button, Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import Logininfo from "./Logininfo";
import Logo from "../../img/Logo.png";
const { Header } = Layout;
function MainHeader() {
  return (
    <>
      <Header
        style={{
          backgroundColor: "white",
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          height: "70px",
          paddingTop: "10px",
          borderBottom: "5px gray solid",
        }}
      >
        <Link to={"/"}>
          {" "}
          <div
            style={{
              backgroundImage: `url(${Logo})`,
              backgroundSize: "60px",
              backgroundRepeat: "no-repeat",
              display: "inline-block",
              width: "70px",
              height: "55px",
              marginLeft: "12%",
            }}
          ></div>
        </Link>
        <div style={{ marginLeft :"340px",marginTop : "-50px",width: "50%", height: "80%" }} className="categoryList">
          <Link to={"/test"} style={{color :"black"}}><div style={{display :"inline-block", margin : "10px 20px 10px 20px" ,borderBottom : "4px solid #F7D5D4",fontSize :"18px" ,fontWeight :"bold",paddingBottom : "10px"}}>모의 테스트</div></Link>
          <Link to={"/testlist"} style={{color :"black"}}><div style={{display :"inline-block",margin : "10px 20px 10px 20px", borderBottom : "4px solid #F7D5D4",paddingBottom : "10px",fontSize :"18px" ,fontWeight :"bold"}}>모의 테스트 리스트</div></Link>
        </div>
        <div style={{ position: "relative", right: "0px" }}>
          <Logininfo></Logininfo>
        </div>
      </Header>
    </>
  );
}

export default MainHeader;
