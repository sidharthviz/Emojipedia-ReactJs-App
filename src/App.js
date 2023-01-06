import React, { useState } from "react";
import "./styles.css";

const emojiPedia = {
  "🙂": "Happy",
  "😞": "Grief",
  "🤔": "Thoughful",
  "😊": "Smiling",
  "❤️": "Like",
  "😅": "Grinning",
  "🏠": "Work from Home",
  "👮": "police",
  "🧘": "Meditating",
  "🚶‍♂️": "Walking"
};

var emojiweKnow = Object.keys(emojiPedia);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiPedia[userInput];

    if (meaning === undefined) {
      meaning = "oops! This is out of dictionary 😓";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiPedia[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Watch your Emoji 👻</h1>
      <input
        className="text"
        placeholder="Put your emoji"
        onChange={emojiInputHandler}
      ></input>

      <h2>{meaning}</h2>
      <h3>Emoji&apos;s We Know ~</h3>
      {emojiweKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}
            key={emoji}
          >
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
