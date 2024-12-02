
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../Config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegisterButton = async () => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      setUser({ email: result.user.email });
      navigate("/");
    } catch (error) {
      console.error("Registration Error:", error.message);
    }
  };

  return (
    <div className="container">
      <h1  className="head"> Register</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegisterButton}>Register</button>
      <p>
        Already have an account?{" "}
        <span className="link" onClick={() => navigate("/login")}>
          Login
        </span>
      </p>
    </div>
  );
};

export default Register;
