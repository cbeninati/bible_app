import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import ChapterText from './ChapterText';
import { formatChapter } from '../utils/helpers';

function Verseslist() {
  const [rangeStart, setRangeStart] = useState(null);
  const [rangeEnd, setRangeEnd] = useState(null);
  const navigate = useNavigate();

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const paramsObj = Object.fromEntries(params.entries());

  const fetchVerses = async () => {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}${location.pathname}${location.search}`);
    return response.json();
  };
  
  const { isPending, data, error } = useQuery({
    queryKey: [paramsObj.chapter],
    queryFn: fetchVerses,
    staleTime: 600000,
    cacheTime: 300000,
  });

  const toggleDiv = (verseNum) => {
    if (rangeStart && rangeEnd) {
      setRangeStart(verseNum);
      setRangeEnd(null);
    } else if (rangeStart) {
      rangeStart < verseNum ? setRangeEnd(verseNum) : setRangeStart(verseNum)
    } else {setRangeStart(verseNum)}
  }

  const setClass = (verseNum) => {
    if (!rangeStart) {
      return 'range-not-selected';
    } else if (!rangeEnd && verseNum === rangeStart) {
      return 'range-selected'
    } else {
       return verseNum >= rangeStart && verseNum <= rangeEnd ? 'range-selected' : 'range-not-selected';
    }
  }

  const handleClick = () => {
    if (!rangeStart) return;
    navigate(`/verse-selected${location.search}&start=${rangeStart}&end=${rangeEnd}`);
  }

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <h4 className="list-heading"><span>Select a Verse or Range of Verses, then Click the Button</span></h4>
      <div id="verse-list" className="list-container numeric-list">
        <ol>
          {data.verseArray.map(verseNum => (
            <li className="grid" key={verseNum}>
              <div className={setClass(verseNum)}
                onClick={() =>toggleDiv(verseNum)}>
                {verseNum}
              </div>
            </li>
          ))}
          <li className="grid">
            <button className='submit-range' onClick={handleClick}>
              {rangeStart ? 'Get Insights' : 'Make Selection'}
            </button>
          </li>
        </ol>
      </div>
      <div>
        <ChapterText paragraphs={formatChapter(data.chapterData.content)}/>
      </div>
    </>
  );
}

export default Verseslist;
