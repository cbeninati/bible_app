import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import LlmOutput from './LlmOutput';
import { getVerseRange } from '../utils/helpers';

function Verse() {
  const [translatedPassage, setTranslatedPassage] = useState(null);
  const [originalPassage, setOriginalPassage] = useState('');
  const location = useLocation();
  const queryClient = useQueryClient();
  const params = new URLSearchParams(location.search);
  const paramsObj = Object.fromEntries(params.entries());

  useEffect(() => {
    const cachedData = queryClient.getQueryData([paramsObj.chapter]);
    const translatedChapter = cachedData.chapterData.content;
    const originalChapter = cachedData.chapterDataOriginal.content
    setTranslatedPassage(getVerseRange(translatedChapter, paramsObj.start, paramsObj.end));
    setOriginalPassage(getVerseRange(originalChapter, paramsObj.start, paramsObj.end));
  }, [queryClient, paramsObj.chapter])


  if (!translatedPassage) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.message}</div>;
  
  return (
    <>
      <div style={{ display: 'flex' }}>
        <div className="verse-block" style={{ flex: 1, padding: '10px' }}>
          <h3>Translated Version:</h3>
          <div id="verse-content" className="verse-container">
              <p>{translatedPassage}</p>
          </div>
        </div>
        <div className="verse-block" style={{ flex: 1, padding: '10px' }}>
          <h3>Original Version:</h3>
          <div id="verse-content" className="verse-container">            
            <p>{originalPassage}</p>
          </div>
        </div>
      </div>   
        <LlmOutput query={location.search} original={originalPassage} translated={translatedPassage} />
    </>
  );
}

export default Verse;
