import React, { useState } from 'react'
import ApiService from "../ApiService";
import { useNavigate } from "react-router-dom";
import queryString from "query-string";

const AddComment = ({ handelComment }) => {


  const [value, setValue] = useState('')

  const inputHaldle = (e) => {
    setValue(e.target.value)
  }
  const navigate = useNavigate();
  const btnHandle = (e) => {
   //  e.preventDefault();
   //  console.log('현재 댓글', value)
    handelComment(value)
    // console.log('handle오류', value)
    setValue('')
    let qs = queryString.parse(window.location.search);
    const test_seq = qs.test_seq;
    // console.log('여기까지 오나')
    let comment = {
      test_seq: qs.test_seq,
      user_id: value.user_id,
      cmt_content: value.cmt_content,
      cmt_dt: value.cmt_dt
    };
    // console.log('여기는??????',comment)
    ApiService.comment(comment)
            .then((res) => {
                console.log("댓글 DB저장 완료");
                navigate('/myPage');
            })
            .catch((err) => {
                console.log("btnHandle() 에러", err);
            });

        window.location.reload(); // 새로고침

  }

 {/* const enterHandle = (e) => {
    console.log(e.code)
    e.code === 'Enter' && btnHandle()
  }*/}

  const btnStlyed = {
    borderRadius: "20px",
    width: "67px",
    float: "right",
    marginRight: "60px",
    marginTop: '26vh',
    backgroundColor: "#FE8F8D",
    color: "white",
    border: 'white'
  }

  return (

    <div className="comment">
      <div style={{ position: 'absolute' }}>
        <input className="cmt_content"

          style={{
            //marginLeft: "53vw", 
            //marginTop: "22.5vh",
            width: "625px",
            //height:"5vh",
            backgroundColor: "#FFECEC",
            borderRadius: 10,
            marginTop: '26vh',
            fontSize: '8px'
          }}
          onChange={inputHaldle}
          value={value}
         // onKeyPress={enterHandle} 
         >

        </input>
        <button onClick={btnHandle} style={btnStlyed} >댓글</button>
      </div>
    </div>

  )
}

export default AddComment;