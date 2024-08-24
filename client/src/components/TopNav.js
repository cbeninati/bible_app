import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function TopNav({ path, queryString }) {
  const [navData, setNavData] = useState([]);

  useEffect(() => {
    function getBreadCrumbs() {
      if (!queryString) {return []};
      const paramsStr = new URLSearchParams(queryString.slice(1));
      const params = Object.fromEntries(paramsStr.entries());

      switch(path) {
        case "/":
          return [];
        case "/books":
          return [params.abbr];
        case "/chapters":
          return [params.abbr, params.book];
        case "/verses":
          const chapterArr = params.chapter.split('.');
          const book = chapterArr[0];
          const chapter = chapterArr[1];
          return [params.abbr, book, chapter];
        case "/verse-selected":
          const verseArr = params.verse.split('.');
          return [params.abbr, verseArr[0], verseArr[1], verseArr[2]];
        default:
          return [];
      }
    }

    setNavData(getBreadCrumbs());
  }, [path, queryString]);

  return (
    <div id="breadcrumbs">
      <ul>
        {navData.map((crumb, index) => (
          <li key={index}>
            {index === navData.length - 1 ? (
              crumb
            ): (
              <Link to="/">{crumb}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopNav;
