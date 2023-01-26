import React, { useState } from "react";
import SendData from "../../pageComponent/Dont_Touch/FormS1";
const FormService = () => {
    const [number, setNumber] = useState(0)

    const getData = (number) => {
      setNumber(number);
    }
  
    return (
      <div>
        
        <p>여기는 부모입니다 : {number}</p>
        <SendData number={number} getData={getData}></SendData>
      </div>
    )
};
export default FormService;
