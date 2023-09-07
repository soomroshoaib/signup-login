import React, { useEffect } from "react";
import socketIo from "socket.io-client";
import { user } from "./Join";
import "./Page.css";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import Message from "./Message";
import Reactscroll from "react-scroll-to-bottom";

const ENDPOINT = "http://localhost:4000/";

let socket;
function Chat() {
  const [id, setid] = useState("");
  const [messages, setmessage] = useState([]);

  const send = () => {
    const message = document.getElementById(`chatinput`).value;
    socket.emit("message", { message, id });
    document.getElementById("chatinput").value = "";
  };
  console.log(messages);

  useEffect(() => {
    socket = socketIo(ENDPOINT, { transports: ["websocket"] });
    socket.on("connect", () => {
      alert("connected");
      setid(socket.id);
    });
    console.log(socket);
    // emit mean data send krna
    socket.emit("Joined", { user });

    socket.on("welcome", (data) => {
      setmessage([...messages, data]);
      console.log(data.user, data.message);
    });

    socket.on("useJoined", (data) => {
      setmessage([...messages, data]);
      console.log(data.user, data.message);
    });
    socket.on(`leave`, (data) => {
      setmessage([...messages, data]);
      console.log(data.user, data.message);
    });

    return () => {
      socket.emit(`disconnect`);
       socket.off();
    };
  }, []);


  useEffect(() => {
    socket.on(`sendMessage`, (data) => {
      setmessage([...messages, data]);
      console.log(data.user, data.message, data.id);
    });
    return ()=>{
      socket.off()

    }
    
    
  },[messages] );
  return (
    <div className="mein-page">
      <div className="second-page">
        <div className="header-page"></div>
        <Reactscroll className="chat-box">
          {messages.map((item) => {
            return (
              <Message
                user={item.id === id ? "" : item.user}
                message={item.message}
                classs={item.id === id ? "right" : "left"}
              />
            );
          })}
        </Reactscroll>
        <div className="input-box">
          <input  type="text" id="chatinput" />
          <button onClick={send} className="sendbtn">
            <SendIcon className="SendIcon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
