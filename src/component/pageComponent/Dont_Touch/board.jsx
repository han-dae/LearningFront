import logo from './logo.svg';

import {useState} from 'react';

function board() {

const [inputData ,setInputData] = useState();
// 사용자가입력한 값
const [data, setData] = useState([]);
// 그동안 사용자가 입력한 값

function chData(e){
  setInputData(e.target.value);
}

function addData(){
  setData(data.concat(inputData));
}

  return (
  <>
    <input onChange={chData}></input>
    <button onClick={addData}>추가!</button>
    {
      ///11111,22222,33333
      data.map(function(input){
        return(
          <h1>{input}</h1>
        );
        }
  )
    }
  </>
  );
}

export default board;
