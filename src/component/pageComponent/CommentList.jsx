import React, { useEffect, useState } from 'react'
import ApiService from '../ApiService'
import queryString from "query-string";

const CommentList = ({ com }) => {
    console.log(com)
    
    const timeText = {
        color: 'gray',
        fonSize: '8px'
    }
    const idText = {
        color: 'black',
        fontSize: '10px',
        fontWeight: 'bold'
    }
    
   // console.log('이제 값을 꺼내오자 !');
   let comList = Object.values(com)
   // console.log(com, 'api가기 전');
    let qs = queryString.parse(window.location.search);
    // console.log(qs, 'api가기 전에 확인');
    const test_seq = qs.test_seq;

    useEffect(() => {
        ApiService.showComment(test_seq)
            .then((res) => {
                console.log(res.status);
                console.log(res);
                console.log("값 확인해보자~ 아이디 내용 시간",comList);
              
            })
            .catch((err) => {
                console.log("show() 에러", err);
            })
    },[]);
    
    // console.log('값 가져왔니?');

    return (
        <div>
            {comList.map((item, idx) => (
                <p key={'num' + idx + item.cmt_content}>
                    <div style={idText}>{item.user_id}</div>
                    {item.cmt_content}
                    <span style={timeText}> {item.cmt_dt}</span>
                    <br></br>
                </p>
            ))}
        </div>
    )
}

export default CommentList