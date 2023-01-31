import React from 'react'

const CommentList = ({ com }) => {
    console.log(com)
    const timeText = {
        color: 'gray',
        fonSize: '8px'
    }
    const idText = {
        color:'black',
        fontSize:'10px',
        fontWeight:'bold'
    }

    let comList = Object.values(com)
   
    return (
        <div>
            {comList.map((item, idx) => (
                <p key={'num' + idx + item.text}> 
                    <div style={idText}>{item.user_id}</div>
                    {item.text}
                    <span style={timeText}> {item.time}</span>
                </p>
            ))}
        </div>
    )
}

export default CommentList