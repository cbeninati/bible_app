import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ChapterText from './ChapterText';

function Verseslist() {
  const location = useLocation();
  const [verseData, setVerseData] = useState(null);
  
  useEffect(() => {
    fetch(`http://localhost:4000${location.pathname}${location.search}`)
      .then(response => response.json())
      .then(json => {
        setVerseData(json);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [location.pathname, location.search]);
  
  return (
    <>
      <h4 className="list-heading"><span>Select a Verse</span></h4>
      <div id="verse-list" className="list-container numeric-list">
      {verseData ? (
        <ol>
          {verseData.verseArray.map(verseNum => (
            <li className="grid" key={verseNum}>
              <Link className="grid-link" to={`/verse-selected?version=${verseData.version}&abbr=${verseData.abbr}&book=${verseData.book}&chapter=${verseData.chapterData.number}&verse=${verseData.chapterData.id}.${verseNum}`}>
              {verseNum}
              </Link>
            </li>
          ))}
        </ol>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      {verseData ? (
        <div>
          <ChapterText paragraphs={verseData.paragraphs}/>
        </div>
      ): (
        <p>Loading...</p>
      )}
    </>
  );
}

export default Verseslist;
