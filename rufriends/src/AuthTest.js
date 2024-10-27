// AuthTest.js
import React, { useState } from "react";
import { auth } from "./firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const AuthTest = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); // State for feedback messages

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, password) // This line should work
      .then((userCredential) => {
        setMessage(`User created: ${userCredential.user.email}`);
      })
      .catch(error => setMessage(`Error signing up: ${error.message}`));
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, password)
      .then((userCredential) => console.log("User logged in:", userCredential.user))
      .catch(error => console.error("Error:", error));
  };

  return (
    <div>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignUp}>Sign Up</button>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default AuthTest;
