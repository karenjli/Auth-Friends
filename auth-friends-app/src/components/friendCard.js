import React from "react";
import { Card } from "semantic-ui-react";

const FriendCard = props => {
  return (
    <Card
      header={props.name}
      meta={`Age: ${props.age}`}
      description={props.email}
    />
  );
};
export default FriendCard;
