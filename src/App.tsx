import React from "react";
import "./App.scss";
import Button from "./components/Button/Button";

function App() {

    const handleClick = () => {
        console.log('clicked');
    }

    return (
        <>
            <h1>Spotify API App</h1>
            <p><b>The goal:</b> connect to the api, search for songs, see the results, add songs to a list, save that list as a playlist to Spotify account.</p>
            <p>I'm not concerned about styling this app. I know how to make things look good. The point is to pratice using apis and making a functional app.</p>
            <hr />
            <h2>Testing the button</h2>
            <Button text="Button Test" onClick={handleClick} />
        </>
    );
}

export default App;
