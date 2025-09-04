import React, { useState } from "react";
import ShortenerForm from "./components/ShortenerForm";
import ResultCard from "./components/ResultCard";
import StatsList from "./components/StatsList";
import "./App.css";

function App() {
  const [links, setLinks] = useState([]);

  const handleShorten = (longUrl, customCode) => {
    if (!isValidUrl(longUrl)) {
      alert("Enter a valid URL!");
      return;
    }

    // generate shortcode
    let shortcode = customCode || Math.random().toString(36).substring(2, 7);

    let shortUrl = window.location.origin + "/s/" + shortcode;

    let newLink = {
      longUrl,
      shortUrl,
      shortcode,
      createdAt: new Date().toLocaleString(),
      clicks: 0,
    };

    setLinks([...links, newLink]);
  };

  const isValidUrl = (str) => {
    try {
      new URL(str);
      return true;
    } catch {
      return false;
    }
  };

  return (
    <div className="container">
      <h1>React URL Shortener</h1>
      <ShortenerForm onShorten={handleShorten} />
      {links.length > 0 && <ResultCard link={links[links.length - 1]} />}
      {links.length > 0 && <StatsList links={links} />}
    </div>
  );
}

export default App;
