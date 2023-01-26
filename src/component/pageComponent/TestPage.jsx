
import MainHeader from "./Header";
import { Layout, theme } from "antd";
import Background from "./Background";
import MainFooter from "./Footer";
import MainBoard from "./MainBoard";
import CarouselComponent from "./CarouselComponent";
import { render } from "@testing-library/react";
import ScrollBottom from "./ScrollBottom";
import { Content, Header } from "antd/es/layout/layout";

import React from 'react'

const TestPage = () => {
  return (
    <div>
            <ScrollBottom />
            <MainHeader />

            <Content>
            </Content>
            <MainFooter />
        </div>
  )
}

export default TestPage