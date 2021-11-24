import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className="home">
            <form className="home-form">
                <input onBlur={e => setName(e.target.value)} type="name" placeholder="Username" required />
                <input onBlur={e => setRoom(e.target.value)} type="room" placeholder="room" required />
                <Link to={`/chat?name=${name}&room=${room}`}>
                    <button className="home-submit-btn" type="submit">Submit</button>
                </Link>
            </form>
        </div>
    );
};

export default Home;