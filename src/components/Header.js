import React from "react";
import "./Header.css"
import troll from "../images/troll-face.png"

export default function Header(){
    return(
        // Always make sure that your HTML is semantic

        <header className="header">
            <div className="logo-group">
                <img src={troll} alt="troll face" />
                <h2>Meme Generator</h2>
            </div>
            
            <h3>React Course - Project 3</h3>
        </header>
    );
}