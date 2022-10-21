import React, { useState } from "react";

import Results from "../Results/Results";

import axios from "axios";

import "./dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="dictionary">
      <form className="form" onSubmit={search}>
        <input
          onChange={handleKeywordChange}
          type="search"
          id="search"
          className="form__input"
          autoComplete="off"
          placeholder=" "
        />
        <label for="search" className="form__label">
          Search for a word
        </label>
      </form>
      <Results results={results} />
    </div>
  );
}
