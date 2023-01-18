import React from "react";
import MainHeader from "./Header";
import { Link } from "react-router-dom";
import {  Layout, theme } from "antd";
import Background from "./Background";
import MainFooter from "./Footer";
import MainBoard from "./MainBoard";
import CarouselComponent from "./CarouselComponent";
import { render } from "@testing-library/react";
import MainService4 from "./MainService2";

// 큐시트 입력받기

class MainService1 extends Component {
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
            category_name :this.state.category_name
        }
    }
    render(){
        return(<div><MainHeader/>
        <Background />
        

        <div style={{textAlign:"center" }}>
        <form>
          <div>
            <label className="label">카테고리선택:</label>
            <select
              type="text"
              name="category_name"
              onChange={this.onChange}
             style={{padding : "5px"}}>
                <option value="이불">이불</option>
                <option value="침대">침대</option>
                <option value="마스크">마스크</option>
            </select>
            <button onClick={this.select}></button>
          </div>
          </form>
            <h2>큐시트 작성</h2>       
          <div>
            <label className="label">큐시트작성 :</label>
            <textarea
              type="text"
              placeholder="큐시트작성"
              name="test_cuesheet"
              value={this.state.test_cuesheet}
              onChange={this.onChange} style={{padding : "5px"}}
              />
          </div>   
        <Link to={MainService1}>
          <button>next</button>
        </Link>
      </div>
        </div>
        )
    }
}
export default MainService1;