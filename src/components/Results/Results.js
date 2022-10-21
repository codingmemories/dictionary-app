import React from "react";

import Meaning from "../Meaning/Meaning";
import Phonetic from "../Phonetic/Phonetic";

import img from "../../images/magic-background.gif";
import "./results.css";

export default function Results(props) {
  console.log(props.results);

  if (props.results) {
    return (
      <div className="results">
        <section>
          <h2>{props.results.word}</h2>
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return <img className="magic-background" src={img} alt="witch with pot" />;
  }
}
