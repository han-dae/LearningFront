import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainComponent from "../pageComponent/MainComponent";
import Login from "../pageComponent/Login";
import TestComponent from "../pageComponent/Test";
import MyPage from "../pageComponent/MyPage";

import TestComponent2 from "../pageComponent/Test2";
import TestComponent3 from "../pageComponent/Test3";
import TestComponent4 from "../pageComponent/Test4";

import FileData from "../pageComponent/FileData";

import Join from "../pageComponent/Join";

import FormService from "../pageComponent/Dont_Touch/FormService";
import SendData from "../pageComponent/Dont_Touch/FormS1";
import TestList from "../pageComponent/TestList";
import TextArea from "antd/es/input/TextArea";
import Comment from "../pageComponent/Comment"

import TestPage from "../pageComponent/TestPage";


import Liked from "../pageComponent/Liked";


function AppRouter() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainComponent />} />
          <Route path="/home" element={<MainComponent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          
          <Route path="/test1" element={<TestComponent />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/test2" element={<TestComponent2 />} />
          <Route path="/test3" element={<TestComponent3 />} />
          <Route path="/test4" element={<TestComponent4 />} />
          <Route path="/daechan" element={<FormService />} />
          <Route path="/daechan2" element={<SendData />} />
          <Route path="/testlist" element={<TestList />} />
          <Route path="/liked" element={<Liked />} />
          <Route path="/FileData" element={<FileData />} />
          <Route path="/testPage" element={<TestPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default AppRouter;
