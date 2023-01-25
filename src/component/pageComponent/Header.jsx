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
          paddingTop : "10px",
          borderBottom : "5px gray solid"
        }}
      >
        <Link to={"/"}> <div style={{ backgroundImage: `url(${Logo})`,
                backgroundSize: "60px", backgroundRepeat: 'no-repeat', display :"inline-block",width:"70px",height: "55px", marginLeft :"12%"}}>
                  
                  </div></Link>
        
       

        <div style={{position : "relative", right :"0px"}}><Logininfo></Logininfo></div>
      
      </Header>
      
    </>
  );
}

export default MainHeader;
