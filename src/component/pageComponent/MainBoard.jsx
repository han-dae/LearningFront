
import React from "react";
import VertiBar from "../Chart/VertiBar"
import VertiBar2 from "../Chart/VertiBar2"

const MainBoard = () => {

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
