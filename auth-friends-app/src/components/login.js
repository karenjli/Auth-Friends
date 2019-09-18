import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: "",
    },
    isLoading: false,
  };

  onChange = event => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [event.target.name]: event.target.value,
      },
    });
    console.log(this.state.credentials);
  };

  login = event => {
    event.preventDefault();
    this.setState({ isLoading: true });
    axiosWithAuth()
      .post("/api/login", this.state.credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/myfriends");
      })
      .catch(err => {
        console.log(err);
        this.setState({ isLoading: false });
      });
  };
  render() {
    return (
      <div className="login">
        <form onSubmit={this.login}>
          <label className="username-label">Username</label>
          <input
            type="text"
            name="username"
            onChange={this.onChange}
            value={this.state.credentials.username}
          />
          <label className="username-label">Password</label>
          <input
            type="password"
            name="password"
            onChange={this.onChange}
            value={this.state.credentials.password}
          />
          <button type="submit">Submit</button>
        </form>
        {this.setState.isLoading === true ? (
          <p className="loading">Loading</p>
        ) : null}
      </div>
    );
  }
}

export default Login;
