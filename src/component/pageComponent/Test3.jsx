import React, { useState } from "react";
import MainHeader from "./Header";
import ScrollBottom from "./Dont_Touch/ScrollBottom";
import { Button, message, Upload } from "antd";
import { InboxOutlined, LeftCircleOutlined } from "@ant-design/icons";
import { RightCircleOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import UploadPic from "./UploadPic";
//import { UploadPic,img } from "./UploadPic"; 
import TextArea from "antd/es/input/TextArea";

import Footer from "./Footer";
import axios from "axios";
const { Dragger } = Upload;


const fd = new FormData();
const TestComponent3 = () => {
  // const [content, setContent] = useState("");
  // const [uploadedImg, setUploadedImg] = useState({
  // fileName: "",
  // fillPath: ""
  // });

  const props = {
    name: 'file',
    multiple: true,
    onChange(info) {
      console.log(info.file);
      console.log(URL.createObjectURL(info.file.originFileObj));
      let video_url = URL.createObjectURL(info.file.originFileObj);

      sessionStorage.setItem('video_url', video_url);
      // sessionStorage.setItem('test_video_realname',video_url)
      console.log(info.file.originFileObj);
      const reader = new FileReader();
      reader.readAsDataURL(info.file.originFileObj);
      reader.onload = () => {
        const url = reader.result;
        //console.log(url);
      }


      console.log(info.file)
      console.log(info.file.name);
      const filename = info.file.name;
      Object.values(info.file).forEach((file) => fd.append("file", file));
      console.log(fd);
      sessionStorage.setItem('test_video', filename);
      console.log('test', sessionStorage.getItem('test_video'));






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
    test_content: ""
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

    axios.post('/test/AxiosFileTest.do', fd, {
      headers: {
        "Content-Type": `multipart/form-data; `,
      },
      baseURL: 'http://localhost:8081/users'
    })
      .then((response) => {
        console.log('리폰데', response.data);
        sessionStorage.setItem('test_video_realname', response.data);
        console.log(sessionStorage.getItem('test_video_realname'));
        if (response.data != null) {
          sessionStorage.setItem('test_title', state.test_title);
          sessionStorage.setItem('test_price', state.test_price);
          sessionStorage.setItem('test_content', state.test_content);
          navigate("/test4");
        }
      })
      .catch((error) => {
        alert('영상 등록해주세요');
        // 예외 처리
      })

    //     axios.post('/test/AxiosFileTest.do', img(), {
    //    headers: {
    //      "Content-Type": `multipart/form-data; `,
    //    },
    //    baseURL: 'http://localhost:8081/users'
    //  })
    //  .then((response) => {
    //   console.log(response.data);
    //      //sessionStorage.setItem('photo',response.data); 
    //    })
    //    .catch((error) => {
    //      // 예외 처리
    //    })


    // let test = {
    //   test_title: sessionStorage.getItem('test_title'),
    //   test_photo: sessionStorage.getItem('photo'),
    //   test_price: sessionStorage.getItem('test_price'),
    //   test_cuesheet: sessionStorage.getItem('cuesheet'),
    //   test_video: sessionStorage.getItem('test_video'),
    //   test_video_realname: sessionStorage.getItem('test_video_realname'),
    //   test_content : sessionStorage.getItem('test_content')

    // }

    // navigate('/test4',
    //   {
    //     state:
    //     {
    //       test_title: test.test_title,
    //       test_photo: test.test_photo,
    //       test_price: test.test_price,
    //       test_cuesheet: test.test_cuesheet,
    //       test_video: test.test_video,
    //       test_content : test.test_content
    //     }
    // });
    //sessionStorage.setItem('test_video',test.test_video);
    //sessionStorage.setItem('test_cuesheet',test.test_cuesheet);
    console.log('데이터 확인1', test)
    console.log('데이터 확인2', state)
  }
  return (
    <div>
      <form>

        <MainHeader />

        <div
          style={{
            marginTop: "20px",
            marginLeft: "20vw",
            width: "31vw",
            height: "50px",

            backgroundColor: "#404040",
            // borderRadius: 30,
            textAlign: "center",
            boxShadow: "5px 5px #b4b4b4",

          }}
        >
          <div
            className="start"
            style={{
              // display: "inline-block",
              width: "100%",
              // textShadow :"2px 2px 2px gray"
              color: 'white'

            }}
          >
            <h1>Upload Video</h1>

          </div>
          <div style={{
            position: "absolute",
            color: "white",
            padding: "5px 10px 5px 10px",
            // borderRadius: "10px",
            display: "inline-block",
            marginLeft: "-31.5vh",
            marginTop: "0vh",
            fontSize: "18px",
            fontWeight: "bold",
            backgroundColor: "#404040",
            boxShadow: "5px 5px #b4b4b4",
            width: '30vw',
            height: '3vh'

          }}>
            <h4 style={{ marginTop: "0vh" }}>
              ReadyCast에 본인 영상을 업로드 해보세요.
            </h4>
          </div>
        </div>
        <div
          style={{
            marginBottom: "30px",
            marginTop: "10vh",
            marginLeft: "20vw",
            width: "31vw",
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
              width: "31vw",
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
                width: "31vw",
                padding: "10px 10px 10px 10px",
                marginBottom: "20px",
                boxSizing: "border-box",
              }}
            ></input>
            <UploadPic />
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

        <div style={{ marginTop: "-525px", marginLeft: "52vw" }}>
          <TextArea
            name="test_content"
            value={state.test_content}
            showCount
            maxLength={800}
            style={{
              height: '45vh',
              width: '31vw',
              resize: "none",
              overflowY: "scroll",
              border: "1px solid #404040",
            }}
            onChange={onChange}
            placeholder="라이브 커머스 영상, 상품정보에 대해  간략하게 설명해주세요."
          />


          <div style={{ marginLeft: "20px", marginTop: "52px" }}>
            <div
              style={{
                position: "absolute",
                color: "white",
                padding: "5px 10px 5px 10px",
                marginLeft: "-2vh",
                marginTop: "-4vh",
                backgroundColor: "#404040",
                boxShadow: "5px 5px #b4b4b4",
                width: '30vw',
                height: '2vh'
              }}>
              <h4 style={{ marginTop: '0vh' }}>1.영상과 이미지를 업로드하세요.</h4></div>
            <div
              style={{
                position: "absolute",
                color: "white",
                padding: "5px 10px 5px 10px",
                marginLeft: "-2vh",
                marginTop: "0vh",
                backgroundColor: "#404040",
                boxShadow: "5px 5px #b4b4b4",
                width: '30vw',
                height: '2vh'
              }}><h4 style={{ marginTop: '0vh' }}>2.라이브 커머스의 제목과 가격을 입력하세요.</h4></div>
            <div
              style={{
                position: "absolute",
                color: "white",
                padding: "5px 10px 5px 10px",
                marginLeft: "-2vh",
                marginTop: "4vh",
                backgroundColor: "#404040",
                boxShadow: "5px 5px #b4b4b4",
                width: '30vw',
                height: '2vh'
              }}><h4 style={{ marginTop: '0vh' }}>3.라이브 커머스 영상을 업로드해주세요.</h4></div>
            {/* <div
            style={{
              position:"absolute",
              color: "white",
              padding: "5px 10px 5px 10px",
              marginLeft: "-2vh",
              marginTop: "8vh",
              backgroundColor: "#404040",
              boxShadow: "5px 5px #b4b4b4",
              width:'30vw',
              height:'2vh'
            }}><h3 style={{marginTop:'0vh'}}>4.분석결과를 토대로 상품의 가격을 책정해주세요.</h3></div>
             */}
            <Link to={"/test2"}>

              <LeftCircleOutlined
                style={{
                  position: "absolute",
                  bottom: "50px",
                  marginTop: "0px",
                  left: "10vw",
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
                right: "10vw",
                fontSize: "300%",
                color: "black",
              }}
            />

          </div>
        </div>
        <div className="testBtn" style={{ marginTop: "79vh", position: "absolute", bottom: "2vh", right: "40vw" }}>
          <Link to={"/test1"}>
            <div className='test1'
              style={{
                width: "5vw",
                marginLeft: "35vw",
                marginTop: "7vh",
                borderBottom: "4px solid gray"
              }}></div>
          </Link>

          <Link to={"/test2"}>
            <div className='test2'
              style={{
                width: "5vw",
                marginLeft: "41vw",
                marginTop: "-0.5vh",
                borderBottom: "4px solid gray"
              }}></div>
          </Link>

          <Link to={"/test3"}>
            <div className='test3'
              style={{
                width: "5vw",
                marginLeft: "47vw",
                marginTop: "-0.5vh",
                borderBottom: "4px solid #0d0d73"
              }}></div>
          </Link>

          <Link to={"/test4"}>
            <div className='test4'
              style={{
                width: "5vw",
                marginLeft: "53vw",
                marginTop: "-0.4vh",
                borderBottom: "4px solid gray"
              }}></div>
          </Link>
        </div>
      </form>

      <Footer />
    </div>
  );
}
export default TestComponent3;
