import React from "react";
import { Button, Layout, Menu } from "antd";
import { Link, useNavigate } from "react-router-dom";
import Logininfo from "./Logininfo";
import Logo3 from "../../img/Logo3.png";
const { Header } = Layout;
function MainHeader() {
  const navigate = useNavigate();
  const clicked =() =>{
    
    let info = sessionStorage.getItem('info');
    if(info){
      navigate('/test1')
    }else{
      alert('로그인을 해주세요')
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
              backgroundImage: `url(${Logo3})`,
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
          <Button onClick={clicked} style={{color :"black",border:"none",backgroundColor:"#404040"}}><div style={{display :"inline-block", margin : "10px 20px 10px 20px" ,borderBottom : "4px solid #0d0d73",fontSize :"18px" ,fontWeight :"bold",paddingBottom : "10px",color :"white"}}>TEST</div></Button>
          <Link to={"/testlist"} style={{color :"black"}}><div style={{display :"inline-block",margin : "10px 20px 10px 20px", borderBottom : "4px solid #0d0d73",paddingBottom : "10px",fontSize :"18px" ,fontWeight :"bold", color :"white"}}>TEST LIST</div></Link>
        </div>
        <div style={{ position: "relative", right: "0px" }}>
          <Logininfo></Logininfo>
        </div>
      </Header>
    </>
  );
}

export default MainHeader;
