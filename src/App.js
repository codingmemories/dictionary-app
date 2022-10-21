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
          <small>
            {" "}
            This project was coded by{" "}
            <a
              href="https://www.linkedin.com/in/vasylyna-lykhogodenko/"
              target="_blank"
              rel="noreferrer"
            >
              Vasylyna Lykhogodenko
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/codingmemories/dictionary-app"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://magic-dictionary-app.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              hosted on Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
