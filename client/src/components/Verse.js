import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import LlmOutput from './LlmOutput';

function Verse() {
  const location = useLocation();
  const [verseData, setVerseData] = useState(null);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}${location.pathname}${location.search}`)
      .then(response => response.json())
      .then(json => setVerseData(json))
      .catch(error => console.error('Error fetching data:', error));
  }, [location.pathname, location.search]);
  
  return (
    <>
      <div style={{ display: 'flex' }}>
        <div className="verse-block" style={{ flex: 1, padding: '10px' }}>
          <h3>Translated Version:</h3>
          <div id="verse-content" className="verse-container">
            {verseData ? (
              <p>{verseData.translatedVerse.content}</p>
            ) : (
              <p>...loading</p>
            )}
          </div>
        </div>
        <div className="verse-block" style={{ flex: 1, padding: '10px' }}>
          <h3>Original Version:</h3>
          <div id="verse-content" className="verse-container">
            {verseData ? (
              <p>{verseData.originalVerse.content}</p>
            ) : (
              <p>...loading</p>
            )}
          </div>
        </div>
      </div>   
        <LlmOutput query={location.search} />
    </>
  );
}

export default Verse;
