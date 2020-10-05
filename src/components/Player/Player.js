import React from 'react'
import './Player.css';
import Sidebar from './PlayerBody/Sidebar/Sidebar';
import Body from './PlayerBody/Body/Body';
import Footer from './Footer/Footer';

function Player({ spotify }) {
    return (
        <div className="player">
            <div className="player__body">
                <Sidebar />
                <Body spotify={spotify} />
            </div>
            <Footer />
        </div>
    )
}

export default Player
