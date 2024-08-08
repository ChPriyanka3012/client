import React, { useState } from 'react';
import './Chat.css';
import { HiDotsVertical } from 'react-icons/hi';
import { FaSearch } from 'react-icons/fa';
import '@fortawesome/fontawesome-free/css/all.min.css'; 

const Input = ({ value, onChange, onSend, onFileChange, handleFileAttach }) => (
  <div className="input-container">
    <input
      id="file-input"
      className="file-input"
      type="file"
      accept="image/*,video/*,audio/*"
      onChange={onFileChange}
    />
    <div className="attach-icon" onClick={handleFileAttach}>
      <i className="fas fa-paperclip"></i>
    </div>
    <input
      className="input-field"
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Type a message..."
    />
    <button className="send-button" onClick={onSend}>Send</button>
  </div>
);

const Message = ({ text, sender, file }) => {
  const isUser = sender === 'user';

  return (
    <div className={`message-container ${isUser ? 'message-container-user' : 'message-container-sender'}`}>
      <div className={`message-bubble ${isUser ? 'message-bubble-user' : 'message-bubble-sender'}`}>
        {text && <div className="message-text">{text}</div>}
        {file && (file.endsWith('.jpg') || file.endsWith('.png')) && <img className="media" src={file} alt="media" />}
        {file && file.endsWith('.mp4') && <video className="video" controls src={file} />}
      </div>
    </div>
  );
};

const Settings = ( ) => (
  <div className="settings-container">
    <button className="button">Block User</button>
    <button className="button">Archive Chat</button>
    <button className="button">Delete Chat</button>
  </div>
);

const Chat = () => {
  const [messages, setMessages] = useState({
    1: [{ id: 1, text: 'Hi, this is Hari!', sender: 'Hari' }],
    2: [{ id: 1, text: 'Hello, I am Fayaz!', sender: 'Fayaz' }],
    3: [{ id: 1, text: 'Hey, Saieesh here!', sender: 'Saieesh' }],
    4: [{ id: 1, text: 'Hi, Priyanka speaking!', sender: 'Priyanka' }],
    5: [{ id: 1, text: 'Whatsup dude, Chandu here', sender: 'Chandu' }],
    6: [{ id: 1, text: 'Hi, Hero!', sender: 'Madhu' }],
    7: [{ id: 1, text: 'vankam da, Sai Teja here!', sender: 'Sai Teja' }],
    8: [{ id: 1, text: 'how are you da, Akshaya speaking!', sender: 'Akshaya' }],
  });
  const [newMessage, setNewMessage] = useState('');
  const [searchTerm] = useState('');
  const [employeeSearchTerm, setEmployeeSearchTerm] = useState('');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [theme, setTheme] = useState({
    backgroundColor: '#e5ded8',
    textColor: '#000',
    chatBackgroundColor: '#fff',
  });
  const [file, setFile] = useState(null);
  const [employees] = useState([
    { id: 1, name: 'Hari' },
    { id: 2, name: 'Fayaz' },
    { id: 3, name: 'Saieesh' },
    { id: 4, name: 'Priyanka' },
    { id: 5, name: 'Chandu' },
    { id: 6, name: 'Madhu' },
    { id: 7, name: 'Sai teja' },
    { id: 8, name: 'Akshaya' },
  ]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleSendMessage = () => {
    if (newMessage.trim() || file) {
      setMessages({
        ...messages,
        [selectedEmployee.id]: [
          ...messages[selectedEmployee.id],
          {
            id: messages[selectedEmployee.id].length + 1,
            text: newMessage,
            sender: 'user',
            file: file ? URL.createObjectURL(file) : null,
          },
        ],
      });
      setNewMessage('');
      setFile(null);
    }
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleEmployeeSelect = (employee) => {
    setSelectedEmployee(employee);
  };

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  const handleFileAttach = () => {
    document.getElementById('file-input').click(); // Trigger file input click
  };

  return (
    <div className="container" style={{ backgroundColor: theme.backgroundColor, textAlign: 'center', color: theme.textColor }}>
      <div className="header">
        Chat
        <div>
          <button className="search-icon1"><FaSearch /></button>
          <button className="settings-button" onClick={toggleSettings}><HiDotsVertical /></button>
        </div>
      </div>
      
      {isSettingsOpen && <Settings theme={theme} changeTheme={changeTheme} />}
      
      <div className="main-content">
        <div className="sidebar">
          <div className="search-container">
            <i className="search-icon fas fa-search" />
            <input
              type="text"
              placeholder="Search employees..."
              className="search-bar"
              value={employeeSearchTerm}
              onChange={(e) => setEmployeeSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="employee-list">
            {employees
              .filter(employee => employee.name.toLowerCase().includes(employeeSearchTerm.toLowerCase()))
              .map(employee => (
                <div key={employee.id} className="employee" onClick={() => handleEmployeeSelect(employee)}>
                  {employee.name}
                </div>
              ))}
          </div>
        </div>
        
        <div
          className="chat-container"
          style={{
            backgroundColor: selectedEmployee ? theme.chatBackgroundColor : 'white',
          }}
        >
          {selectedEmployee && (
            <>
              <div className="chat-header">
                {selectedEmployee.name}
              </div>
              <div className="messages">
                {messages[selectedEmployee.id].filter(msg =>
                  msg.text.toLowerCase().includes(searchTerm.toLowerCase())
                ).map(msg => (
                  <Message key={msg.id} text={msg.text} sender={msg.sender} file={msg.file} />
                ))}
              </div>
              <Input
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onSend={handleSendMessage}
                onFileChange={handleFileChange}
                handleFileAttach={handleFileAttach}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chat;
