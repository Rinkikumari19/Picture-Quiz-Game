import React, { useState, useEffect } from "react";
import Display_que from "./Display_que";
import quiz_que from "./quiz_que.json";
import axios from "axios";

export default function User_welcome() {
  const [userName, setUserName] = useState('');
  const [content, setContent] = useState(false);
  const [showQue, setShowQue] = useState(false);
  const [disableInput, setDisableInput] = useState(true);

  useEffect(() => {
    const items = [];
    const objValues = [];
    for (var i = 0; i < 5; i++) {
      var randomElement = Math.floor(Math.random() * quiz_que.length);
      if (items.indexOf(randomElement) > -1) {
        i = i - 1;
      } else {
        items.push(randomElement);
        objValues.push(quiz_que[randomElement]);
      }
    }
  }, []);

  const showQueFunc = () => {
    setContent(false);
    setShowQue(true);
  };
  const clickFunc = () => {
    var today = Date.now()
    axios
      .post("https://picture-quiz-game.herokuapp.com/data", {
        username: userName,
        date: today,
      })
      .then((data) =>  setUserName(data.data));
    setContent(true);
    setDisableInput(false);
    
  };
  // console.log(userName,showQue,"userNam")
  return (
    <div className="contanier">
      {disableInput ? (
        <div>
          <input
            type="text"
            className="user-input"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Write your name..."
          />
          <button className="user-input" onClick={clickFunc}>
            Click
          </button>
        </div>
      ) : (
        ""
      )}

      {userName && content ? (
        <div>
          <h1>Welcome {userName.username} For Picture Quiz Game</h1>
          <p id="para">
            {" "}
            This game for kid, By playing this game kid can learn easily animals
            name. If you want to play this game so click this button{" "}
          </p>
          <p id="para">👇👇</p>
          <button className="user-input" onClick={showQueFunc}>
            Click here
          </button>
        </div>
      ) : (
        ""
      )}
      {showQue ? <Display_que username = {userName}/> : ""}
    </div>
  );
}
