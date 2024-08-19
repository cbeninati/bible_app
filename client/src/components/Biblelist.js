import React, { useEffect, useState } from 'react';

function Biblelist() {
  const [bibles, setBibles] = useState(null);

  useEffect(() => {
    // Fetch data from the Express backend
    fetch('http://localhost:8080/')
      .then(response => response.json())
      .then(data => setBibles(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  /*
      <div id="bible-version-list" class="list-container bible-list">
        <h4 class="list-heading"><span>English</span></h4>
        <ul>
          <% bibleVersions.forEach(version => { %>
            <li class="bible">
              <a href="/book?version=<%= version.id %>&abbr=<%= version.abbreviation %>">
                <abbr class="bible-version-abbr" title="<%= version.name %>"><%= version.abbreviation %></abbr>
                <span>
                  <span class="bible-version-name"><%= version.name %></span>
                    <span class="bible-version-desc"><%= version.description %></span>
                </span>
              </a>
            </li>
          <% }) %>
        </ul>
      </div>
  */

  return (
    <div id="bible-version-list" className="list-container bible-list">
      <h4 className="list-heading"><span>English</span></h4>
      {bibles ? (
        <ul>
          {bibles.map((bible, index) => (
            <li className="bible" key={index}>
              <a href="/book">
              <abbr className="bible-version-abbr" title="<%= version.name %>">{bible.abbreviation}</abbr>
              <span>
                <span className="bible-version-name">{bible.name}</span>
              </span>
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Biblelist;
