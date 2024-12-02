// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home"
import Login from "./Components/Login";
import Register from "./Components/Register";
import "./index.css";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Home user={user} /> : <Login setUser={setUser} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register setUser={setUser} />} />
      </Routes>
    </Router>
  );
}

export default App;
