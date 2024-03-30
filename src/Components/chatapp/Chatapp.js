import React, { useState, useCallback, useEffect } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { useAuth } from "../../contexts/AuthContext";
import Sidepanel from "../chatapp/sidepanel/Sidepanel";
import { Container } from "react-bootstrap";
import "./Chatapp.css";
import Chatpanel from "./chatpanel/Chatpanel";
import { signOut } from "firebase/auth";

export default function ChatApp() {
  const { currentUser, auth } = useAuth();
  const [rec, setRec] = useState("NA");
  //Public API that will echo messages sent to it back to the client
  const [socketUrl, setSocketUrl] = useState("ws://localhost:8080/chat");
  const [messageHistory, setMessageHistory] = useState([]);
  const [message, setMessage] = useState("");
  const [sendMessageHistory, setSendMessageHistory] = useState([]);
  const [chatData, setChatData] = useState([]);
  const [friendList, setFriendList] = useState([]);
  async function logOut() {
    signOut(auth).then(() => {
      console.log("signout success");
    });
  }

  function loadChat(friendId) {
    //make api call to fetch new chat data and set chatData
    fetch(
      `http://localhost:8000/chatapp/getchats?userId=${currentUser.uid}&friendId=${friendId}`
    ).then((res) => {
      res.json().then((d) => {
        setChatData(d.chats);
      });
    });
  }

  const { sendMessage, lastMessage, readyState, sendJsonMessage } =
    useWebSocket(socketUrl, {
      onMessage(data) {
        console.log("data in onMessage is", data);
        setMessageHistory([...messageHistory, data.data]);
      },
      onOpen(e) {
        console.log("connection is open now");
        sendJsonMessage({ UID: currentUser.uid, email: currentUser.email });
        //fetch the friends list
        fetch(
          `http://localhost:8000/chatapp/getfriends?userId=${currentUser.uid}`
        ).then((res) => {
          res.json().then((d) => {
            console.log(d.friends);
            setFriendList(d.friends);
          });
        });
      },

      onClose(e) {
        console.log("connection closed due to following reason :- ", e);
      },
    });
  useEffect(() => {
    // sendJsonMessage({ UID: currentUser.uid, email: currentUser.email });
  }, []);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   sendJsonMessage({ to: rec, content: message });
  // };

  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];

  return (
    <div className="chat-app-container">
      <Sidepanel friendsList={friendList} loadChat={loadChat} />
      {connectionStatus}
      <button onClick={() => logOut()}>logOut</button>
      <Chatpanel chatData={chatData} />
    </div>
  );
}

// {
//   <form className="message-input" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={message}
//           onChange={(event) => setMessage(event.target.value)}
//           placeholder="Type your message..."
//         />
//         <button type="submit">Send</button>
//       </form>
//       <span>The WebSocket is currently {connectionStatus}</span>
//       <br />
//       <input
//         onChange={(e) => setRec(e.target.value)}
//         type="text"
//         placeholder="enter uid to send to..."
//       />
//       <button onClick={() => logOut()}>logOut</button>
//       <ul>
//         {messageHistory.map((message, idx) => (
//           <li key={idx}>{message ? message : null}</li>
//         ))}
//       </ul>
// }
