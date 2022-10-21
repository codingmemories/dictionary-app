import Dictionary from "./components/Dictionary/Dictionary";

import { GiMagickTrick } from "react-icons/gi";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="app-header">
          <GiMagickTrick size={50} />
          <div className="title-background">
            <h1>Welcome to the magic Dictionary</h1>
          </div>
        </header>
        <main className="main">
          <Dictionary />
        </main>
        <footer className="app-footer">
          <small>Coded by Vasylyna Lykhogodenko</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
