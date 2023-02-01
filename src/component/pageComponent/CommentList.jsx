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
                <p key={'num' + idx + item.cmt_content}> 
                    <div style={idText}>{item.user_id}</div>
                    {item.cmt_content}
                    <span style={timeText}> {item.cmt_dt}</span>
                </p>
            ))}
        </div>
    )
}

export default CommentList