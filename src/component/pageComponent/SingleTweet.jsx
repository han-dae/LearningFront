
import React from 'react';
import Twitter from './Twitter';



const SingleTweet = () => {
   const tweet={
    uuid:1,
    writer:"",
    date:"",
    content:""
   }
  return (
    <div className = 'tweet'>
            <div className='writer'>{tweet.writer}</div>
            <div className='date'>{tweet.date}</div>
            <div className='content'>{tweet.content}</div>
            <Twitter/>
    </div>
  )
}

export default SingleTweet
