import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Sidepanel.css";
import ListGroup from "react-bootstrap/ListGroup";

function Sidepanel({ friendsList, loadChat }) {
  return (
    <Card className="sidepanel-container">
      <ListGroup>
        {friendsList?.map((friend) => (
          <ListGroup.Item
            key={friend.email}
            action
            onClick={() => loadChat(friend.uid)}
          >
            {friend.email}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
}

export default Sidepanel;
