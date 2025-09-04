import React, { useState } from "react";

function ShortenerForm({ onShorten }) {
  const [longUrl, setLongUrl] = useState("");
  const [customCode, setCustomCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onShorten(longUrl, customCode);
    setLongUrl("");
    setCustomCode("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Enter long URL"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Custom shortcode (optional)"
        value={customCode}
        onChange={(e) => setCustomCode(e.target.value)}
      />
      <button type="submit">Shorten</button>
    </form>
  );
}

export default ShortenerForm;
