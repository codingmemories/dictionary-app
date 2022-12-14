import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="synonyms">
        {props.synonyms.map(function (synonym, index) {
          return <p key={index}>{synonym}</p>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
