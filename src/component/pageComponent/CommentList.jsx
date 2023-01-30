import React from 'react'

const CommenList = ({ com }) => {
    console.log(com)
    const smallText = {
        color: 'gray',
        fonSize: '8px'
    }
    console.log('현재 아이디', )
   
    return (
        <div style={{
           // marginLeft: "53vw",
            //marginTop: "3vh",
           // width: "700px",
        }}>
            {com.map((item, idx) => (
                <p key={'num' + idx + item.text}>
                    '아이디' : 
                    {item.text}
                    <span style={smallText}> {item.time}</span>
                </p>
            ))}
        </div>
    )
}

export default CommenList