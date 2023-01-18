import React from "react"
import { Route, Routes, BrowserRouter} from "react-router-dom"
import MainComponent from "../pageComponent/MainComponent";
import Login from "../pageComponent/Login";
import TestComponent from "../pageComponent/Test";
import MainService1 from "../pageComponent/MainService1";

const AppRouter =() => {
    return (
        <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainComponent />} />
            <Route path="/home" element={<MainComponent />} />
            <Route path="/login" element={<Login/>} />
            <Route path ="/test" element={<TestComponent />} />
            <Route path ="/mainService1" element={<MainService1 />} />
            <Route path ="/mainService2" element={<MainService2 />} />
            <Route path ="/mainService3" element={<MainService3 />} />
            <Route path ="/mainService4" element={<MainService4 />} />
        </Routes>
        </BrowserRouter></div>
    );
}

export default AppRouter;