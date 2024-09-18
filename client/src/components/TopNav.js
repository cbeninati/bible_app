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
          const [book, chapter] = params.chapter.split(".");
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
          // book, chapter 
          const arr = params.chapter.split('.');
          // const verseArr = params.verse.split(".");
          return [
            {
              label: params.abbr,
              path: `/books?version=${params.version}&abbr=${params.abbr}`,
            },
            {
              label: arr[0],
              path: `/chapters?version=${params.version}&abbr=${params.abbr}&book=${arr[0]}`,
            },
            {
              label: arr[1],
              path: `/verses?version=${params.version}&abbr=${params.abbr}&book=${arr[0]}&chapter=${params.chapter}`,
            },
            {
              label: `${params.start}-${params.end}`,
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
