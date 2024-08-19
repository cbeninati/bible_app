import React from 'react';

function Header() {
  return (
    <header>
      <div className="container">
        <a href="/" className="logo" title="American Bible Society">ABS</a>
        <div className="crumbs">
          <div id="breadcrumbs"></div>
        </div>
        <h1>
          <a className="flex" href="/">
            <span>LLM Bible Reference</span>
          </a>
        </h1>
      </div>
    </header>
  );
}

export default Header;
