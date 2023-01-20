/* eslint-disable */
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from "axios";
import { useState } from "react";

import { useRouter } from 'next/router'

export default function Regist() {


  const [filename,setfilename] = useState('')
  const [fileUrl,setfileUrl] = useState("")
  
  const handlefilename = (event) => {
    event.preventDefault();
    setfilename(event.target.value);
  };
  
 
  const onChangeImg = (e) => {
    e.preventDefault();
    setfileUrl(e.target.value);
    const formData = new FormData();
    
    
    if(e.target.files){
      const uploadFile = e.target.files[0]
      formData.append('file',uploadFile)
      setFile(uploadFile)
      console.log(uploadFile)
      console.log('===useState===')
      console.log(file)
    }
  }
  const onPrint = ()=>{
    console.log(file)
  }
  


  const onClickLogin2 = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('filename',filename)
    formData.append('fileUrl',fileUrl)
  
    axios({
      method:'post',
      url:'http://localhost:8080/users',
      data: formData,
    })
    .then((result)=>{console.log('요청성공')
    console.log(result)
 
  })
    .catch((error)=>{console.log('요청실패')
    console.log(error)  
  })
  };


  return (
    <>
      
      <Container>

        <Row>
          <Col>
        
          </Col>
          <Col>
  
          파일 명<input type="text" onChange={handlefilename}></input>
          <form>
  <label htmlFor="profile-upload" />
  <input type="file" id="profile-upload" accept="image/*" onChange={onChangeImg}/>
</form>
          
          <button onClick={onClickLogin2}>제출어쩌구저쩌구</button>
          <button onClick={onPrint}>쩐다</button>
                {/* <button type="submit" onClick={onClickLogin}
                  테스트get
                </button>

                <button type="submit" onClick={onClickLogin2}>
                  테스트post
                </button> */}

               
            </Col>
          <Col></Col>
        </Row>
      </Container>

      <style jsx>{`
        
        .logdiv {
          width:300px;
          margin-top:50px;
        }
        .link {
          color: black;
          text-decoration-line: none;
        }

      `}</style>
    </>
  )
}