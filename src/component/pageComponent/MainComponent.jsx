import React from "react";
import MainHeader from "./Header";
import {  Layout, theme } from "antd";
import Background from "./Background";
import MainFooter from "./Footer";
import MainBoard from "./MainBoard";
import CarouselComponent from "./CarouselComponent";



function MainComponent() {
  const { Content,Footer } = Layout;
 
  return (
    <div>
      <MainHeader />
      
      <Background />
      <Content>
      <div style={{ marginTop: "-85vh" }}>
        <div style={{ width: "800px", margin: "auto" }}>
          <CarouselComponent />
        </div>
        
      </div>
      
      </Content>
      
      
         <MainBoard />
       
      <MainFooter />  
    </div>
    
   
  );
}

export default MainComponent;
