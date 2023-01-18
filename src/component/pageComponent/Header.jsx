import React from "react";
import {  Button, Layout, Menu,  } from 'antd';
import { Link } from "react-router-dom";

const { Header } = Layout;
function MainHeader(){
 

    
      return (
        <Layout>
          <Header
            style={{
              backgroundColor: "white",
              position: 'sticky',
              top: 0,
              zIndex: 1,
              width: '100%',
              height: "70px"
            }}
          >
            <div
              style={{
                float: 'left',
                width: 120,
                height: 40,
                marginTop :"16px",
                marginLeft : "12%",
                background: 'rgba(255, 255, 0)'
              }}
            />
            <Link to={"/test"}>
                              
            <Menu
              theme="white"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              items={new Array(1).fill(null).map((_, index) => ({
                key: String(index + 1),
                label: `모의테스트`,
              }))}
              
              style={{
                color:"black",
                paddingBottom : "3px",
                textDecoration : "underline",
                textDecorationStyle : "3px",
                textUnderlineOffset : "12px",
                marginLeft : "20%"
    
              }}

    
              
            />
            
            </Link>  
      <Link to="/Login">
           <Button
           style={{float : "right", marginTop : "-50px", marginRight: "12%", backgroundColor : "#BB2649", color : "white"}}>
              로그인
            </Button>
            </Link>
          </Header>
         
        
        </Layout>
      );
};

export default MainHeader;