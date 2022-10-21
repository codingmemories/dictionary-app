import { GiMagickTrick } from "react-icons/gi";
import { AiOutlineSearch } from "react-icons/ai";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <GiMagickTrick size={50} />
        <div className="title-background">
          <h1>Welcome to the magic Dictionary</h1>
        </div>
      </header>
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

export default App;
