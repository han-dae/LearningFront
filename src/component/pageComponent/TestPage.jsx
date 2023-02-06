import MainHeader from "./Header";
import MainFooter from "./Footer";
import ScrollBottom from "./Dont_Touch/ScrollBottom";
import { Content, Header } from "antd/es/layout/layout";
import React, { useEffect, useState } from "react";
import AddComment from "./AddComment";
import CommenList from "./CommentList";
import queryString from "query-string";
import ApiService from "../ApiService";
import Liked from "./Liked";
// import { UserContext } from "../datas/User/UserContextAPI";

const TestPage = () => {
    const [TestDetail, setTestDetail] = useState({
        category_seq: "",
        reg_dt: "",
        test_cuesheet: "",
        test_photo: "",
        test_price: "",
        test_seq: "",
        test_title: "",
        test_video: "",
        test_video_realname: "",
        user_id: "",
        test_content: ""
    });

    {
        /* const platform =
        {
            name: "",
            pic: "" }
        */
    }

    console.log(window.location.search);
    let qs = queryString.parse(window.location.search);
    let test_seq = qs.test_seq;
    console.log(test_seq);
    useEffect(() => {
        ApiService.detailTest(test_seq)
            .then((res) => {
                console.log('디테일', res.status);
                console.log('디텔데터', res.data, "seq타입", typeof (test_seq));
                setTestDetail(res.data);
            })
            .catch((err) => {
                console.log("load() 에러", err);
            });
    }, []);
    let my_id = sessionStorage.getItem('info');
    const test_seq_id = {
        test_seq: test_seq,
        user_id: my_id
    }
    // 댓글 작성
    const [com, setCom] = useState([]);
    // console.log('현재 아이디', user_id)
    const handelComment = (newCom) => {
        //console.log("handleComment", newCom);
        let comList = Object.values(com)
        let user_id = sessionStorage.getItem('info')
        // console.log('야야야야야야야 나와라 좀 ')
        let currentTime = new Date().toLocaleTimeString();
        setCom(
            comList.concat({
                user_id: user_id,
                cmt_content: newCom,
                cmt_dt: currentTime,
            })
        );
    };

    return (
        <div>
            <ScrollBottom />
            <MainHeader />
            <Content>

                <div
                    className="video"
                    style={{
                        width: "700px",
                        height: "50vh",
                        marginTop: "20vh",
                        marginLeft: "13vw",
                        backgroundColor: "white",
                        // borderRadius: 10,
                    }}
                ><video src={`${process.env.PUBLIC_URL}/file/${TestDetail.test_video_realname}`}
                    controls autoPlay muted playsInline
                    style={{
                        width: "700px",
                        height: "55vh",
                        marginTop: "-13vh",
                    }}
                ></video></div>
                <div
                    style={{
                        marginLeft: "13vw",
                         marginTop: "-7vh",
                        width: '700px',
                        backgroundColor: "#404040",
                        // borderRadius: 20,
                        // textAlign: 'center',
                        color: 'white',
                        boxShadow: "5px 5px #B4B4B4",
                        position:'absolute',
                        height:'18vh'
                    }}>
                    <div
                        className="test_title"
                        style={{ marginTop: "-15px", marginleft: "15%",  }}
                    >
                        <p style={{ fontSize: "24px", marginTop: '1vh', padding: '1vw', paddingBottom:'0vh' }}>{TestDetail.test_title}</p>
                    </div>

                    <div
                        className="user_id"
                        style={{  marginleft: "5%", marginTop: "-4%", padding: '3px' }}
                    >
                        <p style={{fontSize: "16px", paddingLeft: '1vw'}}>작성자  {TestDetail.user_id} </p>
                    </div>
                    <div
                        className="reg_dt"
                        style={{
                            width: "20vw",
                            marginLeft: "32vw",
                            marginTop: "-1.5%",
                            fontSize: "18px",
                            padding: '3px',

                        }}
                    >
                        <p style={{fontSize: "16px", margin:'0vh'}}> {TestDetail.reg_dt} </p>
                    </div>
                    <div
                        className="test_price"
                        style={{
                            width: "7vw",
                            marginLeft: "29vw",
                            // marginTop: "-1.5%",
                            fontSize: "25px",
                            fontFamily: "bold",
                            padding: '5px'
                        }}
                    >
                        {TestDetail.test_price} 원
                    </div>
                </div>
                <div className="liked"
                    style={{
                        marginTop: '-6.5vh',
                        marginLeft: '47vw',
                        width:'2vw',
                        zIndex:'1000',
                        position:'absolute'
                    }}>
                    <Liked test_seq_id={test_seq_id} />
                </div>

                    <div
                        className="img1"
                        style={{
                            width: "200px",
                            height: "200px",
                            marginTop: "-63vh",
                            marginLeft: "50vw",
                            backgroundColor: "#404040",
                            borderRadius: 10,
                            // boxShadow: "5px 5px #B4B4B4"
                        }}>
                        <img src={`${process.env.PUBLIC_URL}/file/${TestDetail.test_photo}`}
                            style={{
                                width: "200px",
                                height: "200px"
                            }}
                            alt="" />
                    </div>

                    <div
                        className="test_content"
                        style={{
                            width: "510px",
                            height: "200px",
                            marginTop: "-23vh",
                            marginBottom: '1vh',
                            marginLeft: "61vw",
                            backgroundColor: "#404040",
                            borderRadius: 10,
                            color: 'white',
                           // padding:'5px'
                            // boxShadow: "5px 5px #B4B4B4",

                        }}
                    ><p style={{padding:'1vw'}}>{TestDetail.test_content}</p></div>

                    <div
                        className="test_cuesheet"
                        style={{
                            fontSize: "18px",
                            marginLeft: "50vw",
                            width: "723px",
                            height: "20vh",
                            backgroundColor: "#404040",
                            borderRadius: 10,
                            color: 'white',
                            // boxShadow: "5px 5px #B4B4B4",
                            overflowY: 'scroll',
                            whiteSpace: "pre-wrap",
                            
                        }}
                    >
                       <p style={{paddingLeft:'1vw'}}> {TestDetail.test_cuesheet} </p>
                    </div>

                    {/*} <div
                        className="price"
                        style={{
                            width: "20vw",
                            marginLeft: "53vw",
                            marginTop: "1vh",
                            fontSize: "25px",
                            fontFamily: "bold",
                        }}
                    >
                        가격 : {TestDetail.test_price} 원
                    </div> */}

                    {/* <div className="comment" 
                        style={{
                            fontSize: "18px", 
                            marginLeft: "53vw", 
                            marginTop:"1vh", 
                            width:"700px", 
                            height:"25vh",
                            backgroundColor:"#FFECEC",
                            borderRadius: 10,
                            overflowY: "scroll"
                            }}>
                        댓글을 입력해주세요.
                        <input className="com_input"
                        style={{
                            // marginLeft: "53vw", 
                            marginTop:"19.5vh", 
                            width:"668px", 
                            // height:"5vh",
                            backgroundColor:"#FFECEC",
                            borderRadius: 10}} >
                               
                            </input>
                        </div>*/}
                    <div
                        style={{
                            marginLeft: "50vw",
                            marginTop: "1vh",
                            width: "713px",
                            height: "25vh",
                            backgroundColor: "#404040",
                            borderRadius: 10,
                            overflowY: "scroll",
                            color: 'white',
                            padding:'5px'
                            // boxShadow: "5px  #B4B4B4"
                        }}
                    >
                        <AddComment handelComment={handelComment} style={{ marginTop: '-3vh' }} />
                        <CommenList com={com} />
                    </div>
               



            </Content>

            <MainFooter />
        </div>
    );
}

export default TestPage;
