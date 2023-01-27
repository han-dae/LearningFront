import React, { useContext, useState } from "react";
import styled from "styled-components";
//import { UserContext } from "../datas/User/UserContextAPI";

const CommentWrapper = styled.div`
  border: 1px solid black;
  p{
    margin: 0;
  }
`;

const UserInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eeeeee;
`;

const Button = styled.button`
  border: 0;
  height: 20px;
  background: none;
`;
function Comment(){
  const [input, setInput] = useState();
  //const { userData } = useContext(UserContext);
  const [comments, setComments] = useState([]);

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const addComment = () => { // 코멘트 추가
    setComments(
      comments.concat({
        id: comments.length + 1,
        content: input,
        userName :  sessionStorage.getItem('info').id,
        //userName: userData[0].id,
      })
    );
    setInput("");
  };

  const removeComment = (id) => { // 코멘트 삭제
    return setComments(comments.filter((comment) => comment.id !== id));
  };

  const chagneContent = (id, inputWord) => { // 코멘트 수정
    return setComments(comments.map((comment) => {
      if (comment.id === id) {
        return {
          ...comment,
          content: inputWord,
        };
      }
      return comment;
    }));
  };

  return (
    <div>
      <input value={input} onChange={onChange}></input>
      <button
        onClick={() => {
          addComment(input);
          setInput("");
        }}
      >
        댓글달기
      </button>
      {comments.map((comment, index) => (
        <CommentWrapper key={`${comment.userName}_${index}`}>
          <UserInfoWrapper>
            <p>{comment.userName}</p>
            <Button onClick={() => removeComment(comment.id)}>삭제</Button>
            <Button onClick={() => chagneContent(comment.id, input)}>
              수정
            </Button>
          </UserInfoWrapper>
          내용: {comment.content}
        </CommentWrapper>
      ))}
    </div>
  );
}

export default Comment;
