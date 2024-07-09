import { useState } from "react";
import "./Chat.scss";
import { userData } from "@/lib/mockData";

const Message = ({ openChatBox }: { openChatBox: () => void }) => {
  return (
    <div className="message" onClick={openChatBox}>
      <img src={userData.img} alt="profile-picture" />
      <span>{userData.name}</span>
      <p>Lorem ipsum dolor sit amet...</p>
    </div>
  );
};

const ChatMessage = ({ owned }: { owned?: boolean }) => {
  return (
    <div className={owned ? "chatMessage own" : "chatMessage"}>
      <p>Lorem ipsum dolor sit amet</p>
      <span>1 hour ago</span>
    </div>
  );
};

const Chat = () => {
  const [chat, setChat] = useState<boolean | null>(true);
  const openChatBox = () => setChat(true);
  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <Message openChatBox={openChatBox} />
        <Message openChatBox={openChatBox} />
        <Message openChatBox={openChatBox} />
        <Message openChatBox={openChatBox} />
        <Message openChatBox={openChatBox} />
        <Message openChatBox={openChatBox} />
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img src={userData.img} alt="profile-picture" />
              {userData.name}
            </div>
            <span className="close" onClick={() => setChat(null)}>
              X
            </span>
          </div>
          <div className="center">
            <ChatMessage />
            <ChatMessage owned={true} />
            <ChatMessage />
            <ChatMessage owned={true} />
            <ChatMessage />
            <ChatMessage owned={true} />
            <ChatMessage />
            <ChatMessage owned={true} />
            <ChatMessage />
            <ChatMessage owned={true} />
          </div>
          <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
