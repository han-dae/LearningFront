
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
          left: "18%",
          backgroundColor: "#F7D5D4",
          width: "25%",
          height: "300px",
          marginTop: "40px",
          borderRadius: 30,
          padding: "10px",
          display: "inline-block",
        }}
      >
        
        <div
          className="title"
          style={{
            textAlign: "center",
            width: 800,
            height: 400
          }}>
            
          <h4 style={{ marginLeft: "-17vw" }}>플랫폼 점유율 비교</h4>
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
                    marginTop:'2vh' 
                  }}><img src={NaverLogo} style={{width :"60px"}}/></div>
           
           
            <div className="SSGLogo"
            style={{ 
              height:'3vh',
              marginTop:'0.5vh'
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
          backgroundColor: "#F7D5D4",
          width: "25%",
          height: "300px",
          marginTop: "40px",
          right: "20%",
          borderRadius: 30,
          padding: "10px",
          display: "inline-block"

        }}
      >
        <div
          className="title"
          style={{
            textAlign: "center",
            width: 800,
            height: 400
          }}>
          <h4 style={{ marginLeft: "-17vw" }}>플랫폼 매출액 비교</h4>
          <VertiBar2 />
        </div>

      </div>

    </div>


  );
};
export default MainBoard;
