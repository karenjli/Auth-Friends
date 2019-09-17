import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const UsernameHandler = event => {
    setUsername(event.target.value);
  };

  const passwordHandler = event => {
    setPassword(event.target.value);
  };
  return (
    <div className="login">
      <form>
        <label className="username-label">Username</label>
        <input
          type="text"
          name="username"
          onChange={UsernameHandler}
          value={username}
        ></input>
        <label className="username-label">Password</label>
        <input
          type="password"
          name="password"
          onChange={passwordHandler}
          value={password}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
