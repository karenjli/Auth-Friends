import React, { useEffect, useState } from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";
import FriendCard from "./friendCard";
import AddFriendForm from "./addFriendForm";

const Friends = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then(res => {
        console.log(res.data);
        setFriends(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  //   onChange = event => {
  //     this.setState({
  //       info: {
  //         ...this.state.info,
  //         [event.target.name]: event.target.value,
  //       },
  //     });
  //   };

  //   const onSubmit = event => value => {
  //     event.preventDefault();
  //     console.log(value);

  //     axiosWithAuth()
  //       .post("http://localhost:5000/api/friends", value)
  //       .then(res => {
  //         setFriends(res.data);
  //       });
  //   };
  return (
    <div className="friendlist">
      {friends.map(item => (
        <FriendCard
          key={item.id}
          name={item.name}
          age={item.age}
          email={item.email}
        />
      ))}
      <AddFriendForm />
    </div>
  );
};

export default Friends;
