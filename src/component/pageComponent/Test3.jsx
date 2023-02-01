import React, { useState } from "react";
import MainHeader from "./Header";
import ScrollBottom from "./Dont_Touch/ScrollBottom";
import { Button, message, Upload } from "antd";
import { InboxOutlined, LeftCircleOutlined } from "@ant-design/icons";
import { RightCircleOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import UploadPic from "./UploadPic";
import TextArea from "antd/es/input/TextArea";

import Footer from "./Footer";
import axios from "axios";
const { Dragger } = Upload;


const TestComponent3 = () => {
  // const [content, setContent] = useState("");
  // const [uploadedImg, setUploadedImg] = useState({
  // fileName: "",
  // fillPath: ""
  // });

  const props =  {
    name: 'file',
    multiple: true,
    onChange(info) {
      console.log(info);
      console.log(URL.createObjectURL(info.file.originFileObj));
      let video_url = URL.createObjectURL(info.file.originFileObj);

      sessionStorage.setItem('video_url', video_url);
      // const url = async(info) => {
      //   const reader = new FileReader();
      //   console.log(reader.readAsDataURL(info.file.originFileObj));
      // }
      //   url(info.file);
      console.log(info.file)
      console.log(info.file.name);
      const filename = info.file.name;
      const fd = new FormData();
      Object.values(info.file).forEach((file) => fd.append("file", file));
      console.log(fd);
      sessionStorage.setItem('test_video', filename);
      console.log('test', sessionStorage.getItem('test_video'));


      axios.post('/test/AxiosFileTest.do', fd, {
        headers: {
          "Content-Type": `multipart/form-data; `,
        },
        baseURL: 'http://localhost:8081/users'
      })
        .then((response) => {
           sessionStorage.setItem('test_video_realname',response.data); 
        })
        .catch((error) => {
          // 예외 처리
        })




    }
    // onDrop(e) {
    //   console.log('Dropped files', e.dataTransfer.files);
    // }
  }

  //console.log('값확인',Object.keys(fd));
  //sessionStorage.setItem('file',fd);
  //console.log('저장확인',sessionStorage.getItem('file'));
  // const { status } = info.file;
  // if (status !== 'uploading') {
  //   console.log(info.file, info.fileList);
  // }
  // if (status === 'done') {
  //   message.success(`${info.file.name} file uploaded successfully.`);
  // } else if (status === 'error') {
  //   message.error(`${info.file.name} file upload failed.`);

  // }



  // const multer = require('multer');
  // const storage = multer.diskStorage({
  //   destination: (req, file, cb) => {
  //     cb(null, 'uploads/');
  //   },
  //   filename: (req, file, cb) => {
  //     const newFileName = file.originalname;
  //     cb(null, newFileName);
  //   }
  // });
  // const upload = multer({ storage: storage });
  // //}

  const [state, setState] = useState({
    test_seq: "",
    test_title: "",
    test_price: "",
    test_cuesheet: "",
    test_video_realname: "",
    reg_dt: "",
    user_id: "",
    category_seq: "",
    category_name: "",
    test_content : ""
  })
  //  const [file, setFile] = useState(null);	//파일	
  //  const handleChangeFile = (event) => {
  //    console.log(event.target.files)
  //    setFile(event.target.files);

  //  }
  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  const navigate = useNavigate();
  const clicked = () => {
    sessionStorage.setItem('test_title',state.test_title);
    sessionStorage.setItem('test_price',state.test_price);
    sessionStorage.setItem('test_content',state.test_content);

    let test = {
      test_title: sessionStorage.getItem('test_title'),
      test_photo: sessionStorage.getItem('photo'),
      test_price: sessionStorage.getItem('test_price'),
      test_cuesheet: sessionStorage.getItem('cuesheet'),
      test_video: sessionStorage.getItem('test_video'),
      test_video_realname: sessionStorage.getItem('test_video_realname'),
      test_content : sessionStorage.getItem('test_content')

    }

    navigate('/test4',
      {
        state:
        {
          test_title: test.test_title,
          test_photo: test.test_photo,
          test_price: test.test_price,
          test_cuesheet: test.test_cuesheet,
          test_video: test.test_video,
          test_content : test.test_content
        }
      });
    //sessionStorage.setItem('test_video',test.test_video);
    //sessionStorage.setItem('test_cuesheet',test.test_cuesheet);
    console.log('데이터 확인', test)
  }
  return (
    <div>
      <form>

        <MainHeader />

        <div
          style={{
            marginTop: "10px",
            marginLeft: "20vw",
            width: "20vw",
            height: "10vh",
            paddingLeft: "10px",
            backgroundColor: "#F7D5D4",
            borderRadius: 20,
            boxShadow :"5px 5px #b4b4b4"
          }}
        >
          <div
            className="start"
            style={{
              display: "inline-block",
              width: "100%",
              textShadow :"2px 2px 2px gray"

            }}
          >
            <h1>Chapter3. 영상 업로드</h1>
            <h3 style={{ marginTop: "-25px" }}>
              ReadyCast에 본인 영상을 업로드 해보세요.
            </h3>
          </div>
        </div>
        <div
          style={{
            marginBottom: "30px",
            marginTop: "25px",
            marginLeft: "20vw",
            width: "28vw",
            backgroundColor: "whitesmoke",
            borderRadius: 10,
          }}
        >
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click</p>
            <p className="ant-upload-hint">이곳에 파일을 드래그 하세요.</p>
            <h3 style={{}}>10분 이내의 영상을 업로드 해주세요.</h3>
          </Dragger>

        </div>

        <div
          style={{
            marginBottom: "30px",
            marginTop: "25px",
            marginLeft: "20vw",
          }}
        >
          <input
            name="test_title"
            value={state.test_title}
            onChange={onChange}
            type="text"
            className="title"
            placeholder="영상의 제목을 입력해주세요."
            style={{
              width: "28vw",
              padding: "10px 10px 10px 10px",
              
              boxSizing: "border-box",
            }}
          ></input>
          <div style={{ marginTop: "0px" }}>
          <input
            name="test_price"
            value={state.test_price}
            onChange={onChange}
            type="text"
            className="price"
            placeholder="가격을 책정해주세요."
            style={{
              marginTop: "25px",
              width: "28vw",
              padding: "10px 10px 10px 10px",
              marginBottom : "20px",
              boxSizing: "border-box",
            }}
          ></input>
            <UploadPic/>
          </div>
        </div>
        {/*<div
          className="Chart02"
          style={{
            marginTop: "25px",
            marginLeft: "20vw",
            width: "28vw",
            height: "30vh",
            backgroundColor: "gray",
            
          }}
        ></div> */}

        <div style={{ marginTop: "-525px", marginLeft: "50vw" }}>
          <TextArea
          name="test_content"
          value={state.test_content}
            showCount
            maxLength={800}
            style={{
              height: 360,
              width: 550,
              resize: "none",
              overflowY: "scroll",
            }}
            onChange={onChange}
            placeholder="라이브 커머스 영상, 상품정보에 대해  간략하게 설명해주세요."
          />
          

          <div style={{ marginLeft: "20px", marginTop: "50px" }}>
            <h3>1.영상과 이미지를 업로드하세요.</h3>
            <h3>2.라이브 커머스의 제목과 가격을 입력하세요.</h3>
            <h3>3.라이브 커머스 영상을 업로드해주세요.</h3>
            <h3>4.분석결과를 토대로 상품의 가격을 책정해주세요.</h3>

            <Link to={"/test2"}>

              <LeftCircleOutlined
                style={{
                  position: "absolute",
                  bottom: "50px",
                  marginTop: "0px",
                  left: "400px",
                  fontSize: "300%",
                  color: "black",
                }}
              />
            </Link>

            <RightCircleOutlined
              onClick={clicked}
              type="Button"
              style={{
                position: "absolute",
                bottom: "50px",
                marginTop: "0px",
                right: "400px",
                fontSize: "300%",
                color: "black",
              }}
            />

          </div>
        </div>

      </form>

      <Footer />
    </div>
  );
}
export default TestComponent3;
