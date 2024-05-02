import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";
UserContext;

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handelSubmit = (e) => {
    // preventDefault kiya q ki by default jab up submit karte ho tab value url k through kahi na kahi chali jati hai ya phir post method k through chali jati hai
    e.preventDefault();
    setUser({ username }, { password });
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
        <br />
      <input
        type="text"
        value={password}
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      /> <br />
      <button onClick={handelSubmit}>Submit</button>
    </div>
  );
}

export default Login;
