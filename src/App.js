import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

    const [quote, setQuote] = useState("");

    function fetchQuote() {
        axios
            .get("https://api.adviceslip.com/advice")
            .then((response) => {
                setQuote(response.data.slip.advice);
            })
            .catch((e) => {
                setQuote("Oops... No Network :(")
            });
    }

    useEffect(() => {
        fetchQuote();
    }, [])

    return (
        <div className="app">
            <div className="card">
                <h2 className="heading">{quote}</h2> <br />
                <button className="button" onClick={fetchQuote}><span>Give me an Advice</span></button>
            </div>
        </div>
    );
}

export default App;