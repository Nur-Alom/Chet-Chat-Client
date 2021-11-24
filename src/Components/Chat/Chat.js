import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import './Chat.css';
import swal from 'sweetalert';

const { io } = require("socket.io-client");

const Chat = () => {
    const { search } = useLocation();
    const { name, room } = queryString.parse(search);

    useEffect(() => {
        const socket = io("http://localhost:5000");

        socket.emit('join', { name, room }, (error) => {
            if (error) {
                swal("opps!", "User Already Exists!", "error");
            }
        });
    }, [])

    return (
        <div className="chat">
            <div className="chat-head">
                <div className="room">
                    {room}
                </div>
                <Link to="/">X</Link>
            </div>
            <div className="chat-box">
                <div className="messages">
                    <div className="message">Test Message</div>
                </div>
                <input placeholder="type something" />
            </div>
        </div>
    );
};

export default Chat;