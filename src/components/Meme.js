import React from "react";
import "./Meme.css"
import memesData from "../memesData";

export default function Meme(){

    const [memeUrl,setMemeUrl] = React.useState("")


    function getMemeImage(){

        const length = memesData.data.memes.length
        const randomIndex = Math.floor(Math.random() * length)
        const randomMeme = memesData.data.memes[randomIndex]
        setMemeUrl(randomMeme.url)
    } 
 
    return (
        <div className="Meme">
            <div className="meme-input">
                <div className="input-fields">
                    <input type="text" className="top-text" placeholder="Top text"/>
                    <input type="text" className="bottom-text" placeholder="Bottome text"/>
                </div>
                
                <input type="submit" className="submit-button" value="Get a new image 🌁" onClick = {getMemeImage}/>
            </div>
            <img src={memeUrl} alt="Meme" className="meme-image  " />
        </div>
    );
}