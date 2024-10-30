import React, {useState} from "react";
import "./App.scss";
import Button from "./components/Button/Button";

function App() {
    const [click, setClick] = useState(0);

    const handleClick = () => {
        setClick(prev => prev + 1);
    }

    const handleReset = () => {
        setClick(0);
    }

    return (
        <>
            <h1>Spotify API App</h1>
            <p><b>The goal:</b> connect to the api, search for songs, see the results, add songs to a list, save that list as a playlist to Spotify account.</p>
            <p>I'm not concerned about styling this app. I know how to make things look good. The point is to pratice using apis and making a functional app.</p>
            <hr />
            <h2>Testing the button</h2>
            <Button text="Button Test" onClick={handleClick} /> <Button text="Reset" onClick={handleReset} />
            <p>Clicked: {click}</p>
        </>
    );
}

export default App;
