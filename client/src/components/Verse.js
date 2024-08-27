import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import LlmOutput from './LlmOutput';

function Verse() {
  const location = useLocation();
  const [verseData, setVerseData] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:4000${location.pathname}${location.search}`)
      .then(response => response.json())
      .then(json => setVerseData(json))
      .catch(error => console.error('Error fetching data:', error));
  }, [location.pathname, location.search]);
  
  return (
    <>
      <h3>Translated Version:</h3>
      <div id="verse-content" className="verse-container">
        {verseData ? (
          <p>TEST</p>
          // <p>{verseData.translatedVerse.content}</p>
        ) : (
          <p>...loading</p>
        )}
      </div>
      <h3>Original Version:</h3>
      <div id="verse-content" className="verse-container">
        {verseData ? (
          <p>TESTING</p>
          // <p>{verseData.originalVerse.content}</p>
        ) : (
          <p>...loading</p>
        )}
      </div>
      {/* <h3>LLM Insights:</h3> */}
        <LlmOutput query={location.search} />
    </>
  );
}

export default Verse;
