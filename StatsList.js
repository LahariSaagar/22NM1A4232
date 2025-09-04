import React from "react";

function StatsList({ links }) {
  return (
    <div className="stats">
      <h2>Statistics</h2>
      <ul>
        {links.map((l, i) => (
          <li key={i}>
            {i + 1}. {l.shortUrl} → {l.longUrl} | Created: {l.createdAt}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StatsList;
