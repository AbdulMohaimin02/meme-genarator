import React from "react";
import "./Meme.css"
import memesData from "../memesData";

export default function Meme(){


    const [meme,setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/2wifvo.jpg"
    })

    const [allMemeImages,setAllMemeImages] = React.useState("")


    React.useEffect(() =>{
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data=> setAllMemeImages(data) )
            
    },[])

    console.log(allMemeImages)


    function getMemeImage(){

        const length = allMemeImages.data.memes.length
        const randomIndex = Math.floor(Math.random() * length)
        const randomMeme = allMemeImages.data.memes[randomIndex]
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: randomMeme.url
        }))
    } 


    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevState =>(
            {
                ...prevState,
                [name]: value
            }
        ))
    }
 
    return (
        <div className="Meme">
            <div className="meme-input">
                <div className="input-fields">

                    <input 
                        type="text" className="top-text" 
                        placeholder="Top text"
                        name = "topText"
                        onChange={handleChange}
                        value = {meme.topText}

                    />

                    <input 
                        type="text"
                        className="bottom-text" 
                        placeholder="Bottome text"
                        name = "bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />

                </div>
                
                <input type="submit" className="submit-button" value="Get a new image 🌁" onClick = {getMemeImage}/>
            </div>

            <div className="meme">
                <img src={meme.randomImage} alt="Meme" className="meme-image  " />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>

        </div>
    );
}