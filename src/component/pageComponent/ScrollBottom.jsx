import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollBottom =()=>{
    const {pathname} = useLocation();
    useEffect(() => {
        window.scrollTo(0,document.body.scrollHeight);
    },[pathname]);
    return null;
}
export default ScrollBottom;