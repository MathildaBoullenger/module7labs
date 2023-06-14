import React, { useContext } from "react";
import { MoodContext } from "./MoodContext";
import happyEmoji from "../assets/happyEmoji.png";
import sadEmoji from "../assets/sadEmoji.png";

function Emoji() {
  const { mood, changeMood } = useContext(MoodContext);

return (
    <div>
      <img
        src={mood === "happy" ? happyEmoji : sadEmoji}
        height="100"
      />
      <button onClick={changeMood}>Change Mood</button>
    </div>
  );
}

export default Emoji;
