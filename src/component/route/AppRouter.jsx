import React from "react"
import { Route, Routes, BrowserRouter} from "react-router-dom"
import MainComponent from "../pageComponent/MainComponent";
import Login from "../pageComponent/Login";
import TestComponent from "../pageComponent/Test";
import Regist from "../pageComponent/SendVideo";
const AppRouter =() => {
    return (
        <div>
      <BrowserRouter>
        <Routes>
            <Route path="/test" element={<Regist/>} />
            <Route path="/" element={<MainComponent />} />
            <Route path="/home" element={<MainComponent />} />
            <Route path="/login" element={<Login/>} />
            <Route path ="/test" element={<TestComponent />} />
        </Routes>
        </BrowserRouter></div>
    );
}

export default AppRouter;