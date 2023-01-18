import React,{Component} from "react";
import MainHeader from "./Header";
import { Link } from "react-router-dom";
import {  Layout, theme } from "antd";
import Background from "./Background";
import MainFooter from "./Footer";
import MainBoard from "./MainBoard";
import CarouselComponent from "./CarouselComponent";
import { render } from "@testing-library/react";

// 등록

class MainService4 extends Component {
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
}
export default MainService4;