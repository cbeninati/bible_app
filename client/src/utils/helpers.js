
export function formatChapter(text) {
  const paragraphs = text.split("\n");
  return paragraphs;
}

// cleanup this logic
export function getVerseRange(chapterText, start, end) {
  const arr = chapterText.split(/(\[\d+\]\s*)/g).filter(Boolean);
  const verseArr = arr.map((item, index) => {
    if (item.includes('[')) {
      return `${item}${arr[index+1]}`
    }
  })
  const range = verseArr.filter(Boolean).slice(Number(start-1), Number(end));
  return range.join('');
}
