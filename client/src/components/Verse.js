import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Verse() {
  const location = useLocation();
  const [verseData, setVerseData] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:8080${location.pathname}${location.search}`)
      .then(response => response.json())
      .then(json => setVerseData(json))
      .catch(error => console.error('Error fetching data:', error));
  }, [location.pathname, location.search]);
  
  return (
    <>
      <h3>Translated Version:</h3>
      <div id="verse-content" class="verse-container">
        <p>{verseData.translatedVerse.content}</p>
      </div>
      <h3>Original Version:</h3>
      <div id="verse-content" class="verse-container">
        <p>{verseData.originalVerse.content}</p>
      </div>
      {/* <h4 className="list-heading"><span>Select a Chapter</span></h4>
      <div id="chapter-list" className="list-container numeric-list">
      {chapterData ? (
        <ol>
          {chapterData.chapters.map((chapter, index) => (
            <li className="grid" key={index}>
              <Link className="grid-link" to={`/verses?version=${chapterData.version}&abbr=${chapterData.abbr}&chapter=${chapter.id}`}>
              {chapter.number}
              </Link>
            </li>
          ))}
        </ol>
        ) : (
          <p>Loading...</p>
        )}
      </div> */}
    </>
  );
}

export default Verse;



// <h3>Translated Version:</h3>
// <div id="verse-content" class="verse-container">
//   <p><%= translatedVerse.content %></p>
// </div>
// <h3>Original Version:</h3>
// <div id="verse-content" class="verse-container">
//   <p><%= originalVerse.content %></p>
// </div>
// <h3>LLM Insights:</h3>
// <div id="verse-content" class="verse-container">
//   <% llmTextParagraphs.forEach(paragraph => { %>
//     <p><%= paragraph %></p>
//   <% }) %>
// </div>
