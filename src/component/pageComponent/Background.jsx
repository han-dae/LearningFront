import React from 'react';
import background from "../../img/background1.png"

const Background = ()=>{

    return(
        <div>
            <img src={background} style={{ position : "relative",height:"100vh", width:"100vw", zIndex : -1}} alt="background1" />
        </div>
    )
}
export default Background;