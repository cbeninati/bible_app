import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Bookslist() {
  const location = useLocation();
  const [booksData, setBooksData] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:8080${location.pathname}${location.search}`)
      .then(response => response.json())
      .then(json => setBooksData(json))
      .catch(error => console.error('Error fetching data:', error));
  }, [location.pathname, location.search]);
  
  return (
    <>
      <h4 class="list-heading"><span>Select a Book:</span></h4>
      <div id="book-list" class="list-container">
     {booksData ? (
        <ul>
          {booksData.list.map((book, index) => (
            <li className="bible" key={index}>
              <Link to={`/chapters?version=${booksData.version}&abbr=${booksData.abbr}&book=${book.id}`}>{book.name}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
      </div>
    </>
  );
}

export default Bookslist;
