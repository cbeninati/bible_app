import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Chapterslist() {
  const location = useLocation();
  const [chapterData, setChapterData] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:8080${location.pathname}${location.search}`)
      .then(response => response.json())
      .then(json => setChapterData(json))
      .catch(error => console.error('Error fetching data:', error));
  }, [location.pathname, location.search]);
  
  return (
    <>
      <h4 class="list-heading"><span>Select a Chapter</span></h4>
      <div id="chapter-list" class="list-container numeric-list">
      {chapterData ? (
        <ol>
          {chapterData.chapters.map((chapter, index) => (
            <li class="grid" key={index}>
              <Link class="grid-link" to={`/verses?version=${chapterData.version}&abbr=${chapterData.abbr}&chapter=${chapter.id}`}>
              {chapter.number}
              </Link>
            </li>
          ))}
        </ol>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}

export default Chapterslist;
