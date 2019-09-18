import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class AddFriendForm extends React.Component {
  state = {
    info: {
      name: "",
      age: undefined,
      email: "",
    },
  };

  onChange = event => {
    this.setState({
      info: {
        ...this.state.info,
        [event.target.name]: event.target.value,
      },
    });
  };

  onSubmit = event => {
    console.log(this.state.info);
    event.preventDefault();

    axiosWithAuth()
      .post("http://localhost:5000/api/friends", this.state.info)
      .then(res => {
        this.setState({});
      });
  };

  render() {
    return (
      <div className="form">
        <h2>Add Friends</h2>
        <form onSubmit={this.onSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            onChange={this.onChange}
            value={this.state.info.name}
          />
          <label>Age</label>
          <input
            type="number"
            name="age"
            onChange={this.onChange}
            value={this.state.info.age}
          />
          <label>E-mail</label>
          <input
            type="text"
            name="email"
            onChange={this.onChange}
            value={this.state.info.email}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddFriendForm;
