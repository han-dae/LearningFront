import React, { useState } from 'react'


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
  useEffect(() => {
    ApiService.sendComment()
      .then((res) => {
        console.log(res.status);
        console.log(res.data);
        setTest(res.data);
      })
      .catch((err) => {
        console.log("send() 에러", err);
      });
  })
  
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
          // marginLeft: "53vw", 
          // marginTop: "22.5vh",
          width: "625px",
          // height:"5vh",
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

export default AddComment