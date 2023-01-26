
import React from "react";
import SingleTweet from "./SingleTweet";
import Twitter from "./Twitter";

const MainBoard = () => {
  const platform = 
  {
    name : "",
    pic : ""}
  
  
  return (
    <div style={{marginTop : "0px"}}>
      <div
        className="Board"
        style={{ position : "absolute",
        left: "18%",
            backgroundColor: "#F7D5D4",
        
          width: "25%",
          height: "300px",
          marginTop:"40px",
          borderRadius: 30,
          padding: "10px",
          display: "inline-block",
        }}
      >
        <div
          className="title"
          style={{ textAlign: "center", fontSize: "25px" }}
        >플랫폼 점유율 비교
          {platform.name}
        </div>
        </div>
        <div
          className="Board"
          style={{
            position : "absolute",
            backgroundColor: "#F7D5D4",

            width: "25%",
            height: "300px",
            marginTop:"40px",
            right : "20%",
            borderRadius: 30,
            padding: "10px",
            display : "inline-block"

          }}
        >
          <div
            className="title"
            style={{ textAlign: "center", fontSize: "25px" }}
          >플랫폼 매출액 비교
            {platform.name}
          </div>
        
        </div>
        
      </div>
      
 
  );
};
export default MainBoard;
