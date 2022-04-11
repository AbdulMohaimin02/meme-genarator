import React from "react";
import "./Meme.css"

export default function Meme(){
    return (
        <div className="Meme">
            <form action="" className="meme-input">
                <div className="input-fields">
                    <input type="text" className="top-text" placeholder="Top text"/>
                    <input type="text" className="bottom-text" placeholder="Bottome text"/>
                </div>
                
                <input type="submit" className="submit-button" value="Get a new image 🌁"/>

                
            </form>
        </div>
    );
}