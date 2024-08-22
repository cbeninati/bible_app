import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Biblelist() {
  const [bibles, setBibles] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/')
      .then(response => response.json())
      .then(data => setBibles(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div id="bible-version-list" className="list-container bible-list">
      <h4 className="list-heading"><span>English</span></h4>
      {bibles ? (
        <ul>
          {bibles.map((bible, index) => (
            <li className="bible" key={index}>
              <Link to={`/books?version=${bible.id}&abbr=${bible.abbreviation}`}>
                <abbr className="bible-version-abbr" title={bible.name}>{bible.abbreviation}</abbr>
                <span>
                  <span className="bible-version-name">{bible.name}</span>
                    <span className="bible-version-desc">{bible.description}</span>
                </span>
              </Link>
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
