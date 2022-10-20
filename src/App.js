
import logo from "./logo.png";
import { AiOutlineSearch } from 'react-icons/ai';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <img className="logo-image" src={logo} alt="dictionary logo" width={100} />
        <h1>Welcome to the Magic Dictionary</h1>
      </header>
      <form>
        <div>
          <label for="search-word"></label>
          <input id="search-word" type="search" placeholder="Search for a word" />
          <button>
            <AiOutlineSearch />
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
