import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

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
        {verseData ? (
          <p>{verseData.translatedVerse.content}</p>
        ) : (
          <p>...loading</p>
        )}
      </div>
      <h3>Original Version:</h3>
      <div id="verse-content" class="verse-container">
        {verseData ? (
          <p>{verseData.originalVerse.content}</p>
        ) : (
          <p>...loading</p>
        )}
      </div>
      <h3>LLM Insights:</h3>
        {verseData ? (
          <div>
          {verseData.llmTextParagraphs.map((paragraph, index) => (
            <p>{paragraph}</p>
          ))}
          </div>
        ): (
          <p>... Loading</p>
        )}
    </>
  );
}

export default Verse;
