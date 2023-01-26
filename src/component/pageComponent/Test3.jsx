
import React, { useState } from "react";

import Background from "./Background";
import Category from "./Category";
import MainHeader from "./Header";
import ScrollBottom from "./ScrollBottom";
import { InboxOutlined } from '@ant-design/icons';
import { Button, message, Upload } from "antd";
import { RightCircleOutlined } from "@ant-design/icons";

import { Link, useNavigate } from "react-router-dom";
import UploadPic from "./UploadPic";
import InputTextArea from "./TextArea";
import TextArea from "antd/es/input/TextArea";
import { Photo } from "@material-ui/icons";
const { Dragger } = Upload;

const TestComponent3 = () => {
  const props = {
    name: 'test_video',
    multiple: true,
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);

      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    }
  }
  const [state, setState] = useState({
    test_seq: "",
    test_title: "",
    test_photo: null,
    test_price: "",
    test_cuesheet: "",
    test_video: null,
    test_video_realname: "",
    reg_dt: "",
    user_id: "",
    category_seq: "",
    category_name: ""
  })
  // const handleChangeFile = (event) => {
  //   console.log(event.target.files)
  //   setState(event.target.files);

  // }
  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }





  const navigate = useNavigate();
  const clicked = () => {
    const fd = new FormData();
    Object.values(state.test_video).forEach((file) => fd.append("file", file));
    let test = {
      test_title: state.test_title,
      test_photo: sessionStorage.getItem('photo'),
      test_price: state.test_price,
      test_cuesheet: state.test_cuesheet,
      test_video: fd
    }
    navigate('/test4',
      {
        state:
        {
          test_title: test.test_title,
          test_photo: test.test_photo,
          test_price: test.test_price,
          test_cuesheet: test.test_cuesheet,
          test_video: test.test_video
        }
      });
    console.log(test)
  }
  return (
    <div>
      <form>
        <ScrollBottom />
        <MainHeader />
        <Background />
        <div
          style={{
            marginTop: "-95vh",
            marginLeft: "20vw",
            width: "20vw",
            height: "10vh",
            paddingLeft: "10px",
            backgroundColor: "white",
            borderRadius: 20,
          }}
        >
          <div
            className="start"
            style={{
              display: "inline-block",
              width: "100%",

              marginTop: "-10px",
            }}
          >
            <h1>Chapter3. 영상 업로드</h1>
            <h3 style={{ marginTop: "-25px" }}>
              ReadyCast에 본인 영상을 업로드 해보세요.
            </h3>
          </div>
        </div>
        <div style={{ marginBottom: "30px", marginTop: "25px", marginLeft: "20vw", width: "28vw", backgroundColor: "whitesmoke", borderRadius: 10 }}>
          <Dragger>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">일단 눌러</p>
            <p className="ant-upload-hint">
              이곳에 파일을 업로드해라
            </p>
          </Dragger>
        </div>

        <div style={{ marginBottom: "30px", marginTop: "25px", marginLeft: "20vw" }}>
          <div>
            <input type="text" onChange={onChange} value={state.test_title} className="title" placeholder="제목을 입력해주세요" style={{ width: "28vw", padding: "10px 10px 10px 10px", boxSizing: "border-box" }} ></input>
          </div>
          <br />
          <input type="text" onChange={onChange} value={state.test_price} className="price" placeholder="가격을 입력해주세요" style={{ width: "28vw", padding: "10px 10px 10px 10px", boxSizing: "border-box" }} ></input>
          <div style={{ marginTop: "25px" }}>
            <UploadPic />
          </div></div>
        <div
          className="Chart02"
          style={{
            marginTop: "25px",
            marginLeft: "20vw",
            width: "28vw",
            height: "30vh",
            backgroundColor: "black",
          }}
        ></div>


        <div
          style={{ marginTop: "-710px", marginLeft: "50vw" }}
        >
          <TextArea
            onChange={onChange}
            value={state.test_cuesheet}
            showCount
            maxLength={800}
            style={{
              height: 400,
              width: 550,
              resize: 'none',
              overflowY: "scroll"
            }}
            placeholder="큐시트작성."
          />
          <div style={{ marginLeft: "20px", marginTop: "50px" }}>
            <h3>1.판매하고자 하는 상품의 명과 이미지를 입력하세요.</h3>
            <h3>2. 라이브 커머스의 제목과 설명을 입력하세요.</h3>
            <h3>3.라이브 커머스 영상을 업로드해주세요.</h3>
            <h3>4.분석결과를 토대로 상품의 가격을 책정해주세요.</h3>

            <Button onClick={clicked} name="videoSubmit" id="videoSubmit" style={{ display: "none" }}></Button>
            <RightCircleOutlined
              style={{
                position: "absolute",
                bottom: "20px",
                marginTop: "0px",
                right: "400px",
                fontSize: "300%",
                color: "black",
              }}
            />

          </div>
          <div style={{ marginBottom: "15px" }}>

          </div>



        </div>
      </form>
    </div>
  );
};
export default TestComponent3;

