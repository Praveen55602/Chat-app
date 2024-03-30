import React from "react";
import { useAuth } from "../../../contexts/AuthContext";
import Card from "react-bootstrap/Card";
import "./Chatpanel.css";

function Chatpanel({ chatData }) {
  const { currentUser } = useAuth();
  console.log(chatData);
  return (
    <Card className="chat-panel-container">
      <ul>
        {chatData?.map((chat) => (
          <li key={chat.content}>{chat.content}</li>
        ))}
      </ul>
    </Card>
  );
}

export default Chatpanel;
