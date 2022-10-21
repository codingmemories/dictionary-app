import React from "react";

import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="phonetic">
      <ReactAudioPlayer
        style={{ borderRadius: "5px" }}
        src={props.phonetic.audio}
        autoPlay
        controls
      />
      <br />
      {props.phonetic.text}
    </div>
  );
}
