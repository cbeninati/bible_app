import { getVerse } from "../controllers/api-controller.js";

export function inOldTestament(bookAbbr) {
  const OTBookIDs = [
    'GEN', 'EXO', 'LEV', 'NUM', 'DEU', 'JOS', 'JDG',
    'RUT', '1SA', '2SA', '1KI', '2KI', '1CH', '2CH',
    '1ES', 'EZR', 'NEH', 'ESG', 'TOB', 'JDT', '1MA',
    '2MA', '3MA', 'JOB', 'PSA', 'MAN', 'PRO', 'ECC',
    'SNG', 'WIS', 'SIR', 'HOS', 'AMO', 'MIC', 'JOL',
    'OBA', 'JON', 'NAM', 'HAB', 'ZEP', 'HAG', 'ZEC',
    'MAL', 'ISA', 'JER', 'BAR', 'LAM', 'EZK', 'DAG',
    '4MA'
  ];
  const NTBookIDs = [
    'MAT', 'MRK', 'LUK', 'JHN', 'ACT', 'ROM', '1CO',
    '2CO', 'GAL', 'EPH', 'PHP', 'COL', '1TH', '2TH',
    '1TI', '2TI', 'TIT', 'PHM', 'HEB', 'JAS', '1PE',
    '2PE', '1JN', '2JN', '3JN', 'JUD', 'REV'
  ];

  return OTBookIDs.includes(bookAbbr);
}

export async function getOriginalVerse(verseID, bookAbbr) {
  const otVersionID = process.env.HEBREW_BIBLE_ID;
  const ntVersionID = process.env.GREEK_BIBLE_ID;
  let originalVerse;

  if (inOldTestament(bookAbbr)) {
    originalVerse = await getVerse(otVersionID, verseID);
  } else {
    originalVerse = await getVerse(ntVersionID, verseID);
  }
  
  return originalVerse;
}
