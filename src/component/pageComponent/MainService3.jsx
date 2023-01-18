import React from "react";
import MainHeader from "./Header";
import {  Layout, theme } from "antd";
import { Link } from "react-router-dom";
import Background from "./Background";
import MainFooter from "./Footer";
import MainBoard from "./MainBoard";
import CarouselComponent from "./CarouselComponent";
import { render } from "@testing-library/react";
import MainService4 from "./MainService4";

// 영상 업로드

class MainService3 extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        test_seq : "",
        test_title: "",
        test_photo: "",
        test_price : "",
        test_cuesheet:"",
        test_video:"",
        test_video_realname:"",
        reg_dt:"",
        user_id:"",
        category_seq: "",
        category_name:""
      };
    }
    onChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
      };
    select = (e) => {
        e.preventDefault();
        let category_select ={
            category_name :this.state.category_name;
        }
    }
    render(){
        return(<div><MainHeader/>
        <Background />
        

        <div style={{textAlign:"center" }}>
        <h2>Login</h2>
        <form>
          <div>
            <label className="label">제목:</label>
            <input
              type="text"
              placeholder="제목"
              name="test_title"
              value={this.state.test_title}
              onChange={this.onChange}
             style={{padding : "5px"}}/>
          </div>

          <div>
            <label className="label">가격 :</label>
            <input
              type="int"
              placeholder="가격"
              name="test_price"
              value={this.state.test_price}
              onChange={this.onChange} style={{padding : "5px"}}
            />
          </div>
          <div>
            <label className="label">영상첨부 :</label>
            <input
              type="file"
              name="test_video"
              value={this.state.test_video}
              onChange={this.onChange} style={{padding : "5px"}}
            />
          </div>
          <div>
            <label className="label">썸네일이미지 :</label>
            <input
              type="file"
              name="test_photo"
              value={this.state.test_photo}
              onChange={this.onChange} style={{padding : "5px"}}
            />
          </div>
          <Link to={MainService4}>
          <button>next</button>
          </Link>
        </form>
      
      </div>
      </div>
    
        )
    }
}
export default MainService3;