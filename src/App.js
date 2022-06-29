import React from "react";
import "./App.css";
import Header from "./components/Header";
import MusicContainer from "./containers/MusicContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <MusicContainer />
    </div>
  );
}

export default App;
