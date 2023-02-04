import React from "react";
import MainHeader from "./Header";
import {  Layout, theme } from "antd";

import MainFooter from "./Footer";
import MainBoard from "./MainBoard";
import CarouselComponent from "./CarouselComponent";



function MainComponent() {
  const { Content,Footer } = Layout;
 
  return (
    <div >
      <MainHeader />
      
      
      <Content>
      <div style={{ marginTop :"80px" }}>
        <div style={{ width: "800px", margin: "auto" }}>
          <CarouselComponent />
        </div>
        <div style={{marginTop : "0",marginLeft :"250px",width : "1400px" , height :"400px" }}>
        <MainBoard/>
        
        </div>
      </div>
     
      </Content>
      
      
       
       
      <MainFooter style={{height:'50px'}} />  
    </div>
    
   
  );
}

export default MainComponent;
