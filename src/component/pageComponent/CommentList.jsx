import React, { useEffect, useState } from 'react'
import ApiService from '../ApiService'
import queryString from "query-string";
import { setCommentRange } from 'typescript';

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

    // console.log(com, 'api가기 전');
    let qs = queryString.parse(window.location.search);
    console.log('api가기 전에 qs확인 : ', qs);
    let test_seq = qs.test_seq;
    const comList = Object.values(com)
    const [Www, setWww] = useState({
        cmt_seq: "",
        test_seq: "",
        cmt_content: "",
        cmt_dt: "",
        user_id: ""
    });
    console.log('리스트 : ', comList);
    useEffect(() => {
        ApiService.showComment(test_seq)
            .then((res) => {
                console.log('리스폰 200 ㅋㅋ ~', res.status);
                console.log(res.data[0].cmt_dt);
                console.log("가져온 배열 : ", res.data);
                setWww(res.data);
                console.log(Www);

                console.log('배열가져온거 어케 함? 모르겠다 아', comList);
                
            })
            .catch((err) => {
                console.log("show() 에러", err);
            })
    }, []);
    let Www11 = Object.values(Www);
    console.log("ㅋㅋ~",Www11);
    // console.log('값 가져왔니?');

    return (
        <div style={{ position :"relative",height :"200px",padding :"10px 20px 10px 20px", color:'white'}}>
            {Www11.map((item, idx) => (
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