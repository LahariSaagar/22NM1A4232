import React from "react";

function ResultCard({ link }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(link.shortUrl);
    alert("Copied: " + link.shortUrl);
  };

  return (
    <div className="result">
      <p>
        Short URL:{" "}
        <a href={link.longUrl} target="_blank" rel="noreferrer">
          {link.shortUrl}
        </a>
      </p>
      <button onClick={copyToClipboard}>Copy</button>
      <p>Valid for 30 minutes</p>
    </div>
  );
}

export default ResultCard;
