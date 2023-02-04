import MainHeader from "./Header";
import MainFooter from "./Footer";
import ScrollBottom from "./Dont_Touch/ScrollBottom";
import { Content, Header } from "antd/es/layout/layout";
import React, { useEffect, useState } from "react";
import AddComment from "./AddComment";
import CommenList from "./CommentList";
import queryString from "query-string";
import ApiService from "../ApiService";
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
                console.log('디테일',res.status);
                console.log('디텔데터',res.data,"seq타입",typeof(test_seq));
                setTestDetail(res.data);
            })
            .catch((err) => {
                console.log("load() 에러", err);
            });
    }, []);

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
                cmt_content : newCom,
                cmt_dt : currentTime,
            })
        );
    };

    return (
        <div>
            <ScrollBottom />
            <MainHeader />
            <Content>
                <div className="right">
                    <div
                        className="video"
                        style={{
                            width: "700px",
                            height: "50vh",
                            marginTop: "82px",
                            marginLeft: "15vw",
                            backgroundColor: "gray",
                            borderRadius: 10,
                        }}
                    ></div>
                    <div style={{ marginLeft: "15%" }}>
                        <div
                            className="nameSpace"
                            style={{ marginTop: "-15px", marginleft: "15%" }}
                        >
                            <p style={{ fontSize: "24px" }}>{TestDetail.test_title}</p>
                        </div>

                        <div
                            className="userName"
                            style={{ fontSize: "18px", marginleft: "35%", marginTop: "-1%" }}
                        >
                            작성자 : {TestDetail.user_id}
                        </div>
                        <div
                            className="telNumber"
                            style={{
                                width: "20vw",
                                marginLeft: "10%",
                                marginTop: "-1.5%",
                                fontSize: "18px",
                            }}
                        >
                            {TestDetail.reg_dt}
                        </div>
                        <div
                            className="price"
                            style={{
                                width: "20vw",
                                marginLeft: "37%",
                                marginTop: "-1.5%",
                                fontSize: "20px",
                                fontFamily: "bold",
                            }}
                        >
                            {TestDetail.test_price} 원
                        </div>
                    </div>
                </div>

                <div className="left">
                    <div
                        className="img1"
                        style={{
                            width: "250px",
                            height: "250px",
                            marginTop: "-60vh",
                            marginLeft: "53vw",
                            backgroundColor: "gray",
                            borderRadius: 10,
                        }}
                    ></div>
                    <div
                        className="img2"
                        style={{
                            width: "500px",
                            height: "25vh",
                            marginTop: "-25vh",
                            marginLeft: "72vw",
                            backgroundColor: "gray",
                            borderRadius: 10,
                        }}
                    ></div>
                    <div
                        className="prod_info"
                        style={{
                            fontSize: "18px",
                            marginLeft: "53vw",
                            
                            width: "713px",
                            height: "20vh",
                            backgroundColor: "#FFECEC",
                            borderRadius: 10,
                        }}
                    >
                        {TestDetail.test_cuesheet}
                    </div>

                    <div
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
                    </div>

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
                            marginLeft: "53vw",
                            marginTop: "1vh",
                            width: "700px",
                            //height: "25vh",
                            backgroundColor: "#FFECEC",
                            borderRadius: 10,
                            overflowY :"scroll",
                            overflow:"visible"
                        }}
                    >
                        <AddComment handelComment={handelComment} style={{marginTop:'-3vh'}}/>
                        <CommenList com={com} />
                    </div>
                </div>


            </Content>

            <MainFooter />
        </div>
    );
}

export default TestPage;
