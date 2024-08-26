import React, { useState, useEffect } from "react"; // React Hooks importieren
import logo from "./logo.svg";
import "./styles/App.css";

function App() {
  // useState Hook zum Verwalten eines Zählers
  const [count, setCount] = useState(0);

  // useEffect Hook, der nach dem ersten Rendern ausgeführt wird
  useEffect(() => {
    console.log("Die App-Komponente wurde geladen!");

    // Cleanup-Funktion (optional), die ausgeführt wird, wenn die Komponente unmounted wird
    return () => {
      console.log("Die App-Komponente wird entladen.");
    };
  }, []); // Leeres Array als Abhängigkeit -> useEffect wird nur einmal beim Mount ausgeführt

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {/* Zähler Sektion mit zwei Buttons */}
        <div className="counter-section">
          <h1>Count: {count}</h1>
          <button onClick={() => setCount(count + 1)}>increase count</button>
          <button onClick={() => setCount(count - 1)}>decrease count</button>
        </div>
      </header>
    </div>
  );
}

export default App;
