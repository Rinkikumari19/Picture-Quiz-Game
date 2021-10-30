import React, { useState } from "react";
import quiz_que from "./quiz_que.json";

export default function Display_que() {
  const [wrong, setWrong] = useState(0);
  const [count, setCount] = useState(0);
  const [right, setRight] = useState(0);
  const [value, setValue] = useState(false)
  const [result, setResult] = useState(false)
  const [againShow, setAgainShow] = useState(false)
 
  const [randQue,setRandQue] = useState(quiz_que[Math.floor(Math.random() * quiz_que.length)])
  const obt_func = (id, ans) => {
    
    if (count < 5) {
      if (ans === id + 1) {
        setCount(count + 1);
        setRight(right + 1);
        setRandQue(quiz_que[Math.floor(Math.random() * quiz_que.length)])
        setValue(false)
      } else {
        setRandQue(prevState => {
          setValue(true)
          setWrong(wrong+1)
          return prevState === randQue ? prevState : quiz_que[Math.floor(Math.random() * quiz_que.length)] ;
        });
      }
    } else {
      setAgainShow(true)
      
      setResult(true)
    }
  };
  

  const playFunc = () => {
    setCount(0);
    setResult(false)
    setAgainShow(false)
   
    setRandQue(quiz_que[Math.floor(Math.random() * quiz_que.length)])
   
  }
  return (
    <div>
        <div>
        {againShow ? "":
          <div>
              <h2 id="h2">👇 Your question is this 👇</h2>
              <img className="img" src={randQue.image} />
              <h2>Options are here</h2>
              {randQue.options.map((obt, index) => {
                return (
                  <button
                    className="user-input obt"
                    onClick={() => obt_func(index, randQue.ans)}
                  >
                    {obt}
                    
                  </button>
                );
              })}
            </div>
            }
          {result?
          <div>
            <h2><button className='user-input'>Result</button> <br />right = {(5-wrong)>0?(5-wrong):0}, Wrong = {wrong}</h2>
            <button className='user-input' onClick={playFunc}>Play Again</button>
          </div>:""}
          {value?<h2>Wrong answer Please choose another option </h2>:""}
        </div>
        
    </div>
  );
}
