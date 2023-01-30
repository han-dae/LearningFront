import React, { useState } from 'react'
import ApiService from "../ApiService";

const AddComment = ({ handelComment }) => {


  const [value, setValue] = useState('')

  const inputHaldle = (e) => {
    setValue(e.target.value)
  }

  const btnHandle = () => {
    console.log('현재 댓글', value)

    handelComment(value)
    
    setValue('')
  }
  const [state, setState] = useState({
    user_id: "",
    cmt_content: "",
    cmt_seq:"",
    test_seq:"",
    cmt_dt:""
  });
  const sendcom= (props) => {
    
  // 댓글 저장
    ApiService.sendComment(props.user_id, props.cmt_content)
      .then((res) => {
        console.log(res.status);
        console.log(res.data);
        
      })
      .catch((err) => {
        console.log("send() 에러", err);
      });
  
  
  const enterHandle = (e) => {
    console.log(e.code)
    e.code === 'Enter' && btnHandle()
  }
  const btnStlyed = {  
      borderRadius: "20px",
      width: "50px",
      float: "right",
      marginRight: "60px",
     //  marginTop: "10px",
      backgroundColor: "#FE8F8D",
      color: "white",
      border:'white'
    }
  
  return (

    <div className="comment">
      <div style={{position:'absolute'}}>
      <input className="com_input"
        style={{
           marginLeft: "53vw", 
           marginTop: "22.5vh",
          width: "625px",
          height:"5vh",
          backgroundColor: "#FFECEC",
          borderRadius: 10
        }}
        onChange={inputHaldle}
        value={value}
        onKeyPress={enterHandle} >

      </input>
      <button onClick={btnHandle} style={btnStlyed} >댓글</button>
      </div>
    </div>

  )
      }
    }
export default AddComment;