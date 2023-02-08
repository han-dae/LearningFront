import React, { useState } from "react";

import MainHeader from "./Header";

import { RightCircleOutlined, LeftCircleOutlined } from "@ant-design/icons";


import { Link } from "react-router-dom";
import TextArea from "antd/es/input/TextArea";
import Footer from "./Footer";



import { Select } from "antd";
import LFBar from "../../component/Chart/LFBarChart";
import NegaLFBar from "../Chart/NegaBarChart";



// useEffect(() => {
//   ApiService.bed()
//     .then((res) => {
//       console.log(res.status);
//       console.log(res.data);
//       setBed(res.data);
//       console.log(res.data[0]);
//     })
//     .catch((err) => {
//       console.log("bed() 에러", err);
//     });
// }, []);

const TestComponent2 = () => {
  const [state, setState] = useState({
    test_cuesheet: ""

  })
const [Category, setCategory] =useState({
  category_seq :""
})

  const onChange1 = (value) => {
    console.log(`selected ${value}`);
   setCategory(value);
   console.log("이거 들어감??" , value);
   console.log(Category); 
  };
  
  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }
  const cuesheetSave = () => {

    const test_cuesheet = state.test_cuesheet;
    console.log(test_cuesheet);
    sessionStorage.setItem('cuesheet', test_cuesheet);
    console.log(sessionStorage.getItem('cuesheet'));
  }


  return (
    <div>
      <form>

        <MainHeader />

        <div
          style={{
            mmarginTop: "20px",
            marginLeft: "20vw",
            width: "31vw",
            height: "5vh",   
            backgroundColor: "#404040",
            borderRadius: 0,
            textAlign :"center",
            boxShadow: "5px 5px #b4b4b4",
            marginTop:'2vh'
          }}
        >
          <div
            className="start"
            style={{
              display: "inline-block",
              width: "50vh",
             // textShadow: "2px 2px 2px gray",
              color: "white",
              textAlign:'center'
            }}
          > <div>
          <Select
            showSearch
            placeholder="카테고리를 선택해주세요"
            optionFilterProp="children"
            onChange={onChange1}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={[
              {
                value: 21,
                label: "침구류",
              },
              {
                value: 22,
                label: "이불",
              },
              {
                value: 23,
                label: "의자",
              },
            ]}
            style={{ width: "20vw", marginLeft: "36vw", marginTop: "10px", border :"2px solid black", borderRadius :"10px" }}
          />
        </div>
        
        
        
        
            <h1 style={{marginTop:'-4.2vh',fontFamily:'S-CoreDream-6Bold',
              fontSize :'26px'}}> Create Cue Sheet </h1>
            <div
              style={{
                position: "absolute",
                color: "white",
                padding: "5px 10px 5px 10px",
                // borderRadius: "10px",
                display: "inline-block",
                marginLeft: "-15vw",
                marginTop: "36vh",
                fontSize: "15px",
                fontWeight: "bold",
                backgroundColor: "#404040",
                boxShadow: "5px 5px #b4b4b4",
                width:'29.5vw',
                fontFamily:"S-CoreDream-3Light"

              }}
            >
              분석결과를 바탕으로 큐시트를 작성해보세요.
            </div>


         
          
          
          
          </div>
        </div>
        <div
          className="Chart02"
          style={{
            display :"inline-block",
            width: "70vw",
            height: "40vh",
            marginTop: "25px",
            marginLeft: "20vw",
float :"left",
            borderRadius: 10,
            
          }}
        >
         <div >
         <div style={{marginLeft :"-200px"}}>
        <LFBar data={Category}  label={{ key :"시발", fontSize: 20 }}/>
        </div>


     
        <NegaLFBar data={Category}/>
        
        </div>
        </div>
       




        <div style={{ marginLeft: "19.5vw" }}>
          <TextArea
            name="test_cuesheet"
            value={state.test_cuesheet}
            showCount
            maxLength={800}
            style={{
              height: "30vh",
              width: "60vw",
              resize: "none",
              overflowY: "scroll",
              marginTop:'1vw',
              marginLeft:'1vw',
              border: "1px solid #404040",fontFamily:'S-CoreDream-3Light'
            }}
            onChange={onChange}
            placeholder="위 그래프를 토대로 스크립트를 작성해보세요."
          />
        </div>
        <div
          className="InputCategory"
          style={{ marginTop: "-680px", marginLeft: "52vw" }}
        >
          <Link to={"/test"}>
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
          <Link to={"/test3"}>
            <RightCircleOutlined
              onClick={cuesheetSave}
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
                borderBottom: "4px solid #0d0d73"
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
                borderBottom: "4px solid gray"
              }}></div>
          </Link>
        </div>
      </form>
      <Footer />
    </div>
  );
};
export default TestComponent2;
