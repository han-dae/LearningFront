import React, { useState } from 'react'
import ApiService from "../ApiService";
import { useNavigate } from "react-router-dom";
import queryString from "query-string";
import { ButtonLF50 } from './ButtonLF';

const AddComment = ({ handelComment }) => {


  const [value, setValue] = useState('')

  const inputHaldle = (e) => {
    setValue(e.target.value)
  }
  // const navigate = useNavigate();
  const btnHandle = (e) => {
   //  e.preventDefault();
    console.log('현재 댓글', value)
    handelComment(value)
   // console.log('handle오류', value)
    let qs = queryString.parse(window.location.search);
    const test_seq = qs.test_seq;
   // console.log('여기까지 오나')
    let comment = {
      test_seq: qs.test_seq,
      user_id: sessionStorage.getItem("info"),
      cmt_content: value,
      // cmt_dt: new Date().toLocaleTimeString()
    };
   // console.log('여기는??????',comment)
    setValue("")
    // ===============================================
    
    ApiService.comment(comment)
            .then((res) => {
                console.log("댓글 DB저장 완료");
               // navigate('/myPage');
            })
            .catch((err) => {
                console.log("btnHandle() 에러", err);
            });

       // window.location.reload(); // 새로고침

  }

  const enterHandle = (e) => {
    
    e.code === 'Enter' && btnHandle()
  }

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
            // marginLeft: "53vw", 
            // marginTop: "22.5vh",
            width: "660px",
            height:"3vh",
            backgroundColor: "#404040",
            borderRadius: 10,
          
            fontSize: '12px',
            color:'white',
            marginTop:'26vh'
          }}
          onChange={inputHaldle}
          value={value}
         // onKeyPress={enterHandle} 
         >

        </input>
       <div onClick={btnHandle}
       style={{marginLeft:'34.8vw',
       marginTop:'-3.8vh'}} >
        <ButtonLF50 value={'댓글'} style={btnStlyed} ></ButtonLF50>
       </div>
      </div>
    </div>

  )
}

export default AddComment;