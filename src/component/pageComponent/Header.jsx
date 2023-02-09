import React from "react";
import { Button, Layout, Menu } from "antd";
import { Link, useNavigate } from "react-router-dom";
import Logininfo from "./Logininfo";
import Logo6 from "../../img/Logo6.png";
const { Header } = Layout;
function MainHeader() {
  const navigate = useNavigate();
  const clicked =() =>{
    
    let info = sessionStorage.getItem('info');
    if(info){
      navigate('/test1')
    }else{
      
      alert('로그인을 해주세요');
    }
  }
  
  return (
    <>
      <Header
        style={{
          backgroundColor: "#404040",
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
              backgroundImage: `url(${Logo6})`,
              backgroundSize: "210px",
              backgroundRepeat: "no-repeat",
              display: "inline-block",
              width: "240px",
              height: "67px",
              marginLeft: "45%",
            }}
          ></div>
        </Link>
        <div style={{ marginLeft :"180px",marginTop : "-70px",width: "50%", height: "80%",fontFamily:'S-CoreDream-3Light' }} className="categoryList">
          <button onClick={clicked} style={{color :"black",border:"none",backgroundColor:"#404040"}}><div style={{display :"inline-block", margin : "15px 40px 10px 20px" ,fontSize :"18px" ,fontFamily:'S-CoreDream-3Light',fontWeight :"bold",paddingBottom : "10px",color :"white", fontStyle :"italic", textShadow :"-3px -3px 1px #0d0d73", fontSize :"20px"}}>TEST</div></button>
          <Link to={"/testlist"} style={{color :"black"}}><div style={{display :"inline-block",margin : "10px 20px 10px 20px",paddingBottom : "5px",fontSize :"18px" ,fontWeight :"bold", color :"white", fontStyle :"italic", fontSize :"20px",textShadow :"-3px -3px 1px #0d0d73"}}>TEST LIST</div></Link>
        </div>
        <div style={{ position: "relative", right: "0px" }}>
          <Logininfo></Logininfo>
        </div>
      </Header>
    </>
  );
}

export default MainHeader;
