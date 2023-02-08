import React, { Component } from "react";
import MainHeader from "./Header";
import { Link, useNavigate } from "react-router-dom";
import { Layout, theme } from "antd";
import MainFooter from "./Footer";
import MainBoard from "./MainBoard";
import CarouselComponent from "./CarouselComponent";
import { render } from "@testing-library/react";
import ScrollBottom from "./Dont_Touch/ScrollBottom";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import Footer from "./Footer";
import axios from "axios";
// 등록
class Test4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test_seq: "",
      test_title: "",
      test_photo: "",
      test_price: "",
      test_cuesheet: "",
      test_video: "",
      test_video_realname: "",
      reg_dt: "",
      user_id: "",
      category_seq: "",
      category_name: "",
      test_content: "",
      video_url: "",
    };
  }
  componentDidMount() {
    console.log('category_  seq', sessionStorage.getItem('category_seq'));
    console.log('didmount 실행됨');
    let getUrl = sessionStorage.getItem("video_url");
    let test_title = sessionStorage.getItem('test_title');
    let test_photo = sessionStorage.getItem("photo");
    let test_price = sessionStorage.getItem('test_price');
    let test_cuesheet = sessionStorage.getItem("cuesheet");
    let test_video = sessionStorage.getItem("test_video");
    let test_video_realname = sessionStorage.getItem("test_video_realname");
    let user_id = sessionStorage.getItem('info');
    let test_content = sessionStorage.getItem('test_content');
    let category_seq = sessionStorage.getItem('category_seq');
    console.log('실행되고 리얼네임 출력', test_video_realname);
    this.setState({ video_url: getUrl });
    this.setState({ test_title: test_title });
    this.setState({ test_photo: test_photo });
    this.setState({ test_price: test_price });
    this.setState({ test_cuesheet: test_cuesheet });
    this.setState({ test_video: test_video });
    this.setState({ test_video_realname: test_video_realname });
    this.setState({ user_id: user_id });
    this.setState({ test_content: test_content });
    this.setState({ category_seq: category_seq });
  }
  //navigate = useNavigate();
  submit = () => {
    let test = {
      test_title: this.state.test_title,
      test_photo: this.state.test_photo,
      test_price: this.state.test_price,
      test_cuesheet: this.state.test_cuesheet,
      test_video: this.state.test_video,
      test_video_realname: this.state.test_video_realname,
      test_content: this.state.test_content,
      user_id: this.state.user_id,
      category_seq: this.state.category_seq
    }
    console.log('ssss', test.test_video_realname);
    console.log('test4', test);
    axios.post('/test/test', test, {
      baseURL: 'http://localhost:8081/users'
    })
      .then((response) => {
        if (response.data == '/testlist') {
          //this.navigate('/testlist');
          sessionStorage.removeItem("video_url");
          sessionStorage.removeItem('test_title');
          sessionStorage.removeItem("photo");
          sessionStorage.removeItem('test_price');
          sessionStorage.removeItem("cuesheet");
          sessionStorage.removeItem("test_video");
          sessionStorage.removeItem("test_video_realname");
          sessionStorage.removeItem('test_content');
          sessionStorage.removeItem('category_seq');
          window.location.replace("/testlist");
        }
      })
      .catch((error) => {
        // 예외 처리
      })
  }

  render() {
    return (
      <div>
        <form>
          <MainHeader />
          <div
            style={{
              marginTop: "10px",
              marginLeft: "20vw",
              width: "35.7vw",
              height: "5vh",
              paddingLeft: "10px",
              backgroundColor: "#404040",
              // borderRadius: 20,
              textAlign: 'center',
              color: 'white',
              boxShadow: "5px 5px #B4B4B4"
            }}
          >
            <h1>Check Video</h1>
          </div>

          <div
            className="Chart01"
            style={{
              width: "700px",
              height: "50vh",
              marginTop: "10px",
              marginLeft: "20vw",
              backgroundColor: "white",
              borderRadius: 10,
            }}
          ><video src={this.state.video_url} controls autoPlay muted playsInline
            style={{
              width: "700px",
              height: "50vh",
              marginTop: "10px",
              marginLeft: "0vw",
            }}></video></div>
          <div
            className="itemContents"
            style={{
              display: "inline-block",
              width: "700px",
              marginLeft: "20vw",
              backgroundColor: "#404040",
              marginTop: "20px",
              borderRadius: "10px",
              boxShadow: "3px 3px #B4B4B4"
            }}
          >
            <div className="nameSpace" style={{ marginTop: "-20px", }}>
              <p style={{ fontSize: "24px", fontWeight: "bold", color: 'white', textAlign: 'center' }}>
                {this.state.test_title}
              </p>
            </div>
            <div className="userName" style={{ fontSize: "18px", color: 'white' }}>작성자 : {this.state.user_id}</div>
            <div
              className="telNumber"
              style={{ width: "20vw", marginLeft: "30%", marginTop: "-21px", fontSize: "18px", color: 'white' }}
            >

            </div>
            <div
              className="price"
              style={{ width: "20vw", marginLeft: "70%", marginTop: "-21px", fontSize: "18px", color: 'white' }}
            >
              가격 : {this.state.test_price}
            </div>
          </div>
          <div className="Script">
            <div
              className="ScriptContents"
              style={{
                width: "500px",
                height: "468px",
                marginLeft: "1100px",
                marginTop: "-570px",
                overflowY: "scroll",
                backgroundColor: "white",
                border: '1px solid #404040'
              }}
            >{this.state.test_cuesheet}</div>
            <div style={{ marginLeft: "1140px" }}>
              <div
                style={{
                  position: "absolute",
                  color: "white",
                  padding: "5px 10px 5px 10px",
                  marginLeft: "-4vh",
                  marginTop: "1vh",
                  backgroundColor: "#404040",
                  boxShadow: "5px 5px #b4b4b4",
                  width: '25vw',
                  height: '2vh'
                }}
              ><h4 style={{ marginTop: '0vh' }} >1. 작성했던 스크립트와 영상을 확인해보세요.</h4> </div>
              <div
                style={{
                  position: "absolute",
                  color: "white",
                  padding: "5px 10px 5px 10px",
                  marginLeft: "-4vh",
                  marginTop: "7vh",
                  backgroundColor: "#404040",
                  boxShadow: "5px 5px #b4b4b4",
                  width: '25vw',
                  height: '2vh'
                }}
              > <h4 style={{ marginTop: '0vh' }}>2. 모두 올바르게 작성되었다면 확인을 누르세요.</h4> </div>
            </div>
          </div>
          <div style={{ marginLeft: "1280px", marginTop: '12vh' }}>
            <form >
              <input type="checkbox" value="agree" name="agreement1" style={{ marginLeft: "10px" }} />개인정보 동의
              <input type="checkbox" value="agree" name="agreement2" style={{ marginLeft: "60px" }} />영상 정보 공개
            </form>
          </div>
          <Link to={"/test3"}>
            <LeftCircleOutlined
              style={{
                position: "absolute",
                bottom: "50px",
                marginTop: "0px",
                left: "14%",
                fontSize: "300%",
                color: "black",
              }}
            /></Link>


          {/* <Link to={"/testlist"}>
              <RightCircleOutlined
              type="Button"
              onClick={this.submit}
              style={{
                position: "absolute",
                bottom: "50px",
                marginTop: "0px",
                right: "10vw",
                fontSize: "300%",
                color: "black",
              }}
              />
              </Link> */}
          <div className="testBtn" style={{ position: "absolute", bottom: "2vh", right: "40vw" }}></div>

          <Link to={"/testlist"}>
            <RightCircleOutlined
              type="Button"
              onClick={this.submit}
              style={{
                position: "absolute",
                bottom: "50px",
                marginTop: "0px",
                right: "10vw",
                fontSize: "300%",
                color: "black",
              }}
            />
            </Link>
          <div className="testBtn" style={{ position: "absolute", bottom: "2vh", right: "40vw" }}>
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
                  borderBottom: "4px solid gray"
                }}></div>
            </Link>
            <Link to={"/test4"}>
              <div className='test4'
                style={{
                  width: "5vw",
                  marginLeft: "53vw",
                  marginTop: "-0.4vh",
                  borderBottom: "4px solid #0D0D73"
                }}></div>
            </Link>
          </div>
        </form>
        <Footer />
      </div>
    );
  }
}
export default Test4;