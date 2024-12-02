// src/components/Home.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../Config/firebase";
import { signOut } from "firebase/auth";

const Home = ({ user }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div className="container">
      <h1>Welcome, {user?.name || user?.email}!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
