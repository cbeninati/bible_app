import React from 'react';


function ChapterText({ paragraphs }) {
  return (
    <div className="eb-container" id="chapter-text">
      {paragraphs.map((paragraph, index)=> (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  )
}

export default ChapterText
