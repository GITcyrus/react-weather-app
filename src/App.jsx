import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./css/App.css";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <br></br>
      <Home />
    </>
  );
}

export default App;
