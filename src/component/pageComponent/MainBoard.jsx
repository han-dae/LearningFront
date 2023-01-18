
import React from "react";

const MainBoard = () => {
  const platform = 
  {
    name : "",
    pic : ""}
  
  
  return (
    <div style={{marginTop : "70px"}}>
      <div
        className="Board"
        style={{ position : "absolute",
        left: "18%",
            backgroundColor: "white",
          opacity: 0.5,
          width: "25%",
          height: "300px",
          
          borderRadius: 30,
          padding: "10px",
          display: "inline-block",
        }}
      >
        <div
          className="title"
          style={{ textAlign: "center", fontSize: "25px" }}
        >
          {platform.name}
        </div>
        </div>
        <div
          className="Board"
          style={{
            position : "absolute",
            backgroundColor: "white",
            opacity: 0.5,
            width: "25%",
            height: "300px",
            right : "20%",
            borderRadius: 30,
            padding: "10px",
            display : "inline-block"
          }}
        >
          <div
            className="title"
            style={{ textAlign: "center", fontSize: "25px" }}
          >
            {platform.name}
          </div>
        
        </div>
      </div>
 
  );
};
export default MainBoard;
