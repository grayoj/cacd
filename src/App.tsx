import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";
import Welcome from "./pages/welcome";
import {
  Route,
  Routes,
} from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="" Component={Home}/>
      <Route path="/login" Component={Welcome}/>
    </Routes>
  );
}

export default App;
