import React from 'react'

const CommentList = ({ com }) => {
    console.log(com)
    const smallText = {
        color: 'gray',
        fonSize: '8px'
    }
    
    let comList = Object.values(com)
   
    return (
        <div>
            {comList.map((item, idx) => (
                <p key={'num' + idx + item.text}> 
                    {item.user_id}
                    {item.text}
                    <span style={smallText}> {item.time}</span>
                </p>
            ))}
        </div>
    )
}

export default CommentList