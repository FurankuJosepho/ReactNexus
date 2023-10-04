import { useState } from 'react';
import "../CSS/chat.css";
import Frankie from "../assets/Frankie.jpg"

function Chat() {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    if (inputValue.trim() !== '') {
      const newMessage = {
        text: inputValue,
        isUser: true,
      };
      setMessages([...messages, newMessage]);
      setInputValue('');
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
   <section className='ChattingRoom'>
    <div className="leftSideChat">
        <h5>Friends(0)</h5>
    </div>
     <div className="chat-container">
        <div className="chat-Name">
        <div className="user-avatar2">
                <img src={Frankie} alt="User Avatar" />
        </div>
        <h3 className='UserChatName'>Frank Joseph Garcia</h3>
        </div>
      <div className="chat-messages">
      {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.isUser ? 'user' : 'bot'}`}
          >
            {message.isUser && (
              <div className="user-avatar">
                <img src={Frankie} alt="User Avatar" />
              </div>
            )}
            <div className="message-content">
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Message @user..."
        />
        <button className='SendingBTN' onClick={sendMessage}>Send</button>
      </div>
    </div>
   </section>
  );
}

export default Chat;
