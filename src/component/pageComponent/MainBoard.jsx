
import React from "react";
import VertiBar from "../Chart/VertiBar"
import VertiBar2 from "../Chart/VertiBar2"
import Naver from "../../img/Naver.png"
import Lotte from "../../img/Lotte.png"
import SSG from "../../img/SSG.png"
import Coupang from "../../img/Coupang.png"

const MainBoard = () => {
  const LogoImg = [
    { id: 0, url: Naver },
    { id: 1, url: Lotte },
    { id: 2, url: SSG },
    { id: 3, url: Coupang },
  ];
  let NaverLogo = (LogoImg[0].url);
  let LotteLogo = (LogoImg[1].url);
  let SSGLogo = (LogoImg[2].url);
  let CoupangLogo = (LogoImg[3].url);
  return (
    <div style={{ marginTop: "0px" }}>
      
      <div
        className="Board"
        style={{
          position: "absolute",
          left: "10%",
          backgroundColor: "Lightgray",
          width: "35%",
          height: "230px",
          marginTop: "40px",
          borderRadius: 30,
          padding: "10px",
          display: "inline-block",
          boxShadow :"10px 10px #b4b4b4"
         
        }}
      >
        
        <div
          className="title"
          style={{
            textAlign: "center",
            width: 1000,
            height: 400
          }}>
            <div style={{width :"300px", marginTop :"-20px",marginLeft :"200px",height :"40px", borderRadius :"30px", boxShadow :"3px 3px 1px gray" ,color :"white",backgroundColor :"#0d0d73"}}>
          <div style={{ marginLeft: "0px" , fontSize :"20px",fontWeight :"bold", marginTop :"20px",marginBottom : "20px", paddingTop :"5px"}}>PLATFORM RANK</div></div>
          <div className="logoImg"
          style={{height:'18vh',
                  width:'3.5vw',
                  position:'absolute',
                  left:'1vw',
                  zIndex:3000,
                  backgroundRepeat: "no-repeat",
                  
                }}>
           
           
            <div className="NaverLogo" 
            style={{ 
                    height:'3vh',
                    marginTop:'2.5vh' 
                  }}><img src={NaverLogo} style={{width :"60px"}}/></div>
           
           
            <div className="SSGLogo"
            style={{ 
              height:'3vh',
              marginTop:'1vh'
              }}><img src={SSGLogo} style={{width :"60px"}}/></div>
            <div className="CoupangLogo"
            style={{ 
                    height: '3vh',
                    marginTop: '0.5vh'
                  }}><img src={CoupangLogo} style={{width :"60px"}}/></div>
            <div className="LotteLogo"
            style={{ 
                    height: '3vh',
                    marginTop: '0.5vh'
                  }}><img src={LotteLogo} style={{width :"60px"}}/></div>

          </div>
          
          <VertiBar />
          
        </div>
      </div>
      <div
        className="Board"
        style={{
          position: "absolute",
          // backgroundColor: "#FFECEC",
          backgroundColor :"Lightgray",
          width: "35%",
          height: "230px",
          marginTop: "40px",
          right: "10%",
          borderRadius: 30,
          padding: "10px",
          display: "inline-block",
          boxShadow :"10px 10px #b4b4b4",
          


        }}
      >
        <div
          className="title"
          style={{
            textAlign: "center",
            width: 800,
            height: 400,
            
          }}><div style={{width :"300px", marginTop :"-20px",marginLeft :"180px",height :"40px", borderRadius :"30px", backgroundColor :"#0d0d73", boxShadow :"3px 3px 1px gray"}}>
          <h4 style={{ marginLeft: "-1vw" , fontSize :"20px",fontWeight :"bold", marginTop :"30px",marginBottom : "40px",paddingTop:"5px",paddingLeft:"20px", color :"white"}}>PLATFORM REVENUE</h4></div>
          <div className="logoImg"
          style={{height:'18vh',
                  width:'2.5vw',
                  position:'absolute',
                  left:'1vw',
                  zIndex:3000,
                  backgroundRepeat: "no-repeat",
                  marginTop:'1.5vh',
                  
                }}>
           
           
            <div className="NaverLogo" 
            style={{ 
                    height:'3vh',
                    marginTop:'1vh' 
                  }}><img src={NaverLogo} style={{width :"60px"}}/></div>
           
           
            <div className="CoupangLogo"
            style={{ 
              height:'3vh',
              marginTop:'0.5vh'
              }}><img src={CoupangLogo} style={{width :"60px"}}/></div>
            <div className="SSGLogo"
            style={{ 
                    height: '3vh',
                    marginTop: '0.5vh'
                  }}><img src={SSGLogo} style={{width :"60px"}}/></div>
            <div className="LotteLogo"
            style={{ 
                    height: '3vh',
                    marginTop: '0.5vh'
                  }}><img src={LotteLogo} style={{width :"60px"}}/></div>

          </div>
          <VertiBar2 />
        </div>

      </div>

    </div>


  );
};
export default MainBoard;
