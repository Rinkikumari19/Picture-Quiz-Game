import React, { useState, useEffect } from "react";
import Display_que from "./Display_que";
import quiz_que from "./quiz_que.json";

export default function User_welcome() {
  const [userName, setUserName] = useState("");
  const [value, setValue] = useState(false);
  const [showQue, setShowQue] = useState(false);
  const [items,setItems] = useState([]);
  const [objValues, setObjValues] = useState([])

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

  return (
    <div className="contanier">
      <input
        type="text"
        className="user-input"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Write your name..."
      />
      <button className="user-input" onClick={() => setValue(true)}>
        Click
      </button>
      {userName.length > 0 && value ? (
        <div>
          <h1>Welcome {userName} For Picture Quiz Game</h1>
          <p id="para">
            {" "}
            This game for kid, By playing this game kid can learn easily animals
            name. If you want to play this game so click this button{" "}
          </p>
          <p id="para">👇👇</p>
          <button className="user-input" onClick={() => setShowQue(true)}>
            Click here
          </button>
          {showQue ? <Display_que /> : ""}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}






// mongodb+srv://Rinki:Rinki@1410@cluster0.5wkal.mongodb.net/Picture_Quiz_Game?retryWrites=true&w=majority