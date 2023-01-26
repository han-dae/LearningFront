import React from 'react'
import { useState } from 'react'
const SendData = ({ number, getData }) => {
    const onClick = () => {
        console.log(number);
        getData(number + 1);
      }
    
      return (
        <div>
          <button onClick={onClick}>+</button>
        </div>
      )
}
export default SendData;