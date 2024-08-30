import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import ChapterText from './ChapterText';
import { formatChapter } from '../utils/helpers';

function Verseslist() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const paramsObj = Object.fromEntries(params.entries());
  const fetchVerses = async () => {
    const response = await fetch(`http://localhost:4000${location.pathname}${location.search}`);
    return response.json();
  };
  
  const { isPending, data, error } = useQuery({
    queryKey: [paramsObj.chapter],
    queryFn: fetchVerses,
    staleTime: 600000,
    cacheTime: 300000,
  });

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <h4 className="list-heading"><span>Select a Verse</span></h4>
      <div id="verse-list" className="list-container numeric-list">
        <ol>
          {data.verseArray.map(verseNum => (
            <li className="grid" key={verseNum}>
              <Link className="grid-link" to={`/verse-selected?version=${data.version}&abbr=${data.abbr}&book=${data.book}&chapter=${data.chapterData.number}&verse=${data.chapterData.id}.${verseNum}`}>
              {verseNum}
              </Link>
            </li>
          ))}
        </ol>
      </div>
      <div>
        <ChapterText paragraphs={formatChapter(data.chapterContent)}/>
      </div>
    </>
  );
}

export default Verseslist;
