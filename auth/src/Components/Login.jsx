import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../Config/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLoginButton = async () => {
    setError("");
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      setUser({ email: result.user.email });
      navigate("/");
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        setError("User not found. Please register first.");
      } else if (error.code === "auth/wrong-password") {
        setError("Incorrect password. Please try again.");
      } else {
        setError("Login failed. Please check your credentials.");
      }
    }
  };

  const handleGoogleButton = async () => {
    setError("");
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser({ name: result.user.displayName, email: result.user.email });
      navigate("/");
    } catch (error) {
      setError("Google Login failed. Please try again.");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent :"center",alignItems:"center" }}>
    <div className="container">
      <h1 className="head">Login</h1>
      
      {error && <p style={{ color: "red" }}>{error}</p>}
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
      
      <button onClick={handleLoginButton}>Login</button>
     
      <button className="google-login" onClick={handleGoogleButton}>
        <FcGoogle size={20} />
        Login with Google
      </button>
      <p>
        Don't have an account?{" "}
        <span className="link" onClick={() => navigate("/register")}>
          Register
        </span>
      </p>
     
    </div>
    </div>
  );
};

export default Login;
