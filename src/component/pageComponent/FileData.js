import React, { useState, useEffect } from 'react';
import axios from 'axios'; 

function FileData() {
  const [file, setFile] = useState(null);	//파일	
  
  const handleChangeFile = (event) => {
    setFile(event.target.files);
  }

  function Send(){
    const fd = new FormData();
    // 파일 데이터 저장
    Object.values(file).forEach((file) => fd.append("file", file));

   
    axios.post('/test/AxiosFileTest.do', fd, {
      headers: {
        "Content-Type": `multipart/form-data; `,
      },
      baseURL: 'http://localhost:3000'
    })
    .then((response) => {
      
    })
    .catch((error) => {
      // 예외 처리
    })
  
  }
    return (
        <div>
            FileData
            <div>
                fileData1:  <input type="file" id="file" onChange={handleChangeFile} multiple="multiple"></input>
            </div>
          
            
            <div>
                <button onClick={()=> Send()}>Send</button>
            </div>
        </div>
    );
  }
export default FileData;