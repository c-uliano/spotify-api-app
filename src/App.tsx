import React, {useState} from "react";
import "./App.scss";
import Button from "./components/Button/Button";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
    const [click, setClick] = useState(0); // button click count
    const [value, setValue] = useState(''); // input value
    const [displayed, setDisplayed] = useState(''); // displaying the input value
    const [show, setShow] = useState(false); // to display the input value or not

    // * keep an updated total of button clicks
    const handleClick = () => {
        setClick(prev => prev + 1);
    }

    // * clear the button clicks
    const handleReset = () => {
        setClick(0);
    }

    // * save input value
    const handleSave = (e:any) => {
        const inputValue = e.target.value;
        setValue(inputValue);
    }

    // * display input value
    const showSave = () => {
        setDisplayed(value);
        setShow(true);
        setValue('');
    }

    // * clear displayed input value
    const clearSave = () => {
        setDisplayed('');
    }

    return (
        <>
            <h1>Spotify API App</h1>
            <p><b>The goal:</b> connect to the api, search for songs, see the results, add songs to a list, save that list as a playlist to Spotify account.</p>
            <p>I'm not concerned about styling this app. I know how to make things look good. The point is to pratice using apis and making a functional app.</p>

            <hr />

            <h2>Testing Button</h2>
            <Button text="Button Test" onClick={handleClick} /> <Button text="Reset" onClick={handleReset} />
            <p>Clicked: {click}</p>

            <h3>Testing Button with input</h3>
            <input type="text" onChange={handleSave} value={value} />
            <Button text="Show Value" onClick={showSave} /> <Button text="Reset" onClick={clearSave} />
            <div>
                {show && displayed}
            </div>

            <h2>Testing SearchBar v1</h2>
            <SearchBar />
        </>
    );
}

export default App;
