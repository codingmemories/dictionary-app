import React from "react";

import { AiOutlineSearch } from "react-icons/ai";

export default function Form() {
  return (
    <div>
      <form>
        <div>
          <label for="search-word"></label>
          <input
            id="search-word"
            type="search"
            placeholder="Search for a word"
          />
          <button>
            <AiOutlineSearch />
          </button>
        </div>
      </form>
    </div>
  );
}
