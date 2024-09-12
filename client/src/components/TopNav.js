import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function TopNav({ path, queryString }) {
  const [navData, setNavData] = useState([]);

  useEffect(() => {
    function getBreadCrumbs() {
      if (!queryString) return [];
      const paramsStr = new URLSearchParams(queryString.slice(1));
      const params = Object.fromEntries(paramsStr.entries());

      switch (path) {
        case "/":
          return [];
        case "/books":
          return [
            {
              label: params.abbr,
              path: `/books?version=${params.version}&abbr=${params.abbr}`,
            },
          ];
        case "/chapters":
          return [
            {
              label: params.abbr,
              path: `/books?version=${params.version}&abbr=${params.abbr}`,
            },
            {
              label: params.book,
              path: `/chapters?version=${params.version}&abbr=${params.abbr}&book=${params.book}`,
            },
          ];
        case "/verses":
          const chapterArr = params.chapter.split(".");
          const book = chapterArr[0];
          const chapter = chapterArr[1];
          return [
            {
              label: params.abbr,
              path: `/books?version=${params.version}&abbr=${params.abbr}`,
            },
            {
              label: book,
              path: `/chapters?version=${params.version}&abbr=${params.abbr}&book=${book}`,
            },
            {
              label: chapter,
              path: `/verses?version=${params.version}&abbr=${params.abbr}&book=${book}&chapter=${params.chapter}`,
            },
          ];
        case "/verse-selected":
          const verseArr = params.verse.split(".");
          return [
            {
              label: params.abbr,
              path: `/books?version=${params.version}&abbr=${params.abbr}`,
            },
            {
              label: verseArr[0],
              path: `/chapters?version=${params.version}&abbr=${params.abbr}&book=${verseArr[0]}`,
            },
            {
              label: verseArr[1],
              path: `/verses?version=${params.version}&abbr=${params.abbr}&book=${verseArr[0]}&chapter=${verseArr[0]}.${verseArr[1]}`,
            },
            {
              label: verseArr[2],
              path: `/verse-selected?version=${params.version}&abbr=${params.abbr}&verse=${params.verse}`,
            },
          ];
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
              crumb.label
            ) : (
              <Link to={crumb.path}>{crumb.label}</Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopNav;
