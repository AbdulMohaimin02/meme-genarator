import React from "react";
import "./Header.css"
import troll from "../images/troll-face.png"

export default function Header(){
    return(
        <div className="header">
            <div className="logo-group">
                <img src={troll} alt="troll face" />
                <h1>Meme Generator</h1>
            </div>
            
            <h3>React Course - Project 3</h3>
        </div>
    );
}