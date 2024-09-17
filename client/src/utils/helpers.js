
export function formatChapter(text) {
  const paragraphs = text.split("\n");
  return paragraphs;
}

export function getVerseRange(chapterText, start, end) {
  const verseArray = chapterText.split(/\[\d+\]/).filter(item => item !== '');
  const range = verseArray.splice(Number(start) - 1, Number(end) - 1);
  return range.join('')
}

