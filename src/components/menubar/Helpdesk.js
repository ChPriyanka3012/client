import React, { useState } from 'react';
import './Helpdesk.css';
import { useNavigate } from 'react-router-dom';

const Helpdesk = () => {
    const [messages, setMessages] = useState([
        { sender: 'rep', text: 'Hello! How can I assist you today?' }
    ]);
    const [input, setInput] = useState('');
    const navigate = useNavigate(); // Initialize the useNavigate hook

    const handleSendMessage = () => {
        if (input.trim()) {
            setMessages([...messages, { sender: 'user', text: input }]);
            setInput('');
            setTimeout(() => {
                setMessages([...messages, { sender: 'user', text: input }, { sender: 'rep', text: 'Thank you for your message. We are looking into it.' }]);
            }, 1000);
        }
    };

    const handleEndChat = () => {
        // Navigate to the previous page or home
        navigate(-1); // Go back to the previous page
    };

    return (
        <div className='live-chat-container'>
            <h2>Live Chat Support</h2>
            <hr />
            <div className='chat-window'>
                <div className='messages'>
                    {messages.map((msg, index) => (
                        <div key={index} className={`message ${msg.sender}`}>
                            {msg.sender === 'rep' ? 'Representative: ' : 'You: '}
                            {msg.text}
                        </div>
                    ))}
                </div>
                <div className='input-area'>
                    <input
                        type='text'
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder='Type your message...'
                    />
                    <button onClick={handleSendMessage}>Send</button>
                </div>
                <button className='end-chat-button' onClick={handleEndChat}>End Chat</button>
            </div>
        </div>
    );
};

export default Helpdesk;
