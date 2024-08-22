import React from 'react';

function Subheader({ selection }) {
  return (
    <div className="subheader">
      <div className="container flex">
        <div className="subheadings">
          <h2>Select a:</h2>
          <h3>{selection}</h3>
        </div>
      </div>
    </div>
  );
}

export default Subheader;
