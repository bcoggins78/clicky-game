import React from "react";
import "./style.css";
import AudioPlayer from "react-h5-audio-player";
import Theme from "./theme.mp3"

function Footer() {
    return (
        // Footer component that holds the music player component that plays the Doctor Who theme
        <footer className="footer mt-auto py-3">
            <div className="container">
                <AudioPlayer
                    src={Theme}
                    onPlay
                    loop  
                />
            </div>
        </footer>
    )
}

export default Footer;