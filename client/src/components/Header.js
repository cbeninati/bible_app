import React from 'react';
import TopNav from './TopNav';

function Header({ path, queryString }) {
  return (
    <header>
      <div className="container">
        <a href="/" className="logo" title="American Bible Society">ABS</a>
        {/* <div className="crumbs">
          <TopNav path={path} queryString={queryString}/>
        </div> */}
        <h1>
          <a className="flex" href="/">
            <span>Bibliogos</span>
          </a>
        </h1>
      </div>
    </header>
  );
}

export default Header;
