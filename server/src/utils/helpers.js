import { getVerse } from "../controllers/bible-api-controller.js";

export const englishTranslationsSubset = [
  {
    name: 'American Standard Version (Byzantine Text with Apocrypha)',
    id: '685d1470fe4d5c3b-01',
    abbreviation: 'ASVBT',
    description: null,
    language: 'English'
  },
  {
    name: 'Cambridge Paragraph Bible of the KJV',
    id: '55212e3cf5d04d49-01',
    abbreviation: 'engKJVCPB',
    description: 'Common',
    language: 'English'
  },
  {
    name: 'Free Bible Version',
    id: '65eec8e0b60e656b-01',
    abbreviation: 'FBV',
    description: 'Protestant FBV full 3.0 beta',
    language: 'English'
  },
  {
    name: 'Geneva Bible',
    id: 'c315fa9f71d4af3a-01',
    abbreviation: 'enggnv',
    description: 'common',
    language: 'English'
  },
  {
    name: 'King James (Authorised) Version',
    id: 'de4e12af7f28f599-01',
    abbreviation: 'engKJV',
    description: 'Ecumenical',
    language: 'English'
  },
  {
    name: 'King James (Authorised) Version',
    id: 'de4e12af7f28f599-02',
    abbreviation: 'engKJV',
    description: 'Protestant',
    language: 'English'
  },
  {
    name: 'Literal Standard Version',
    id: '01b29f4b342acc35-01',
    abbreviation: 'LSV',
    description: 'Protestant',
    language: 'English'
  },
  {
    name: 'The Holy Bible, American Standard Version',
    id: '06125adad2d5898a-01',
    abbreviation: 'ASV',
    description: 'Bible',
    language: 'English'
  },
  {
    name: 'The Text-Critical English New Testament',
    id: '32339cf2f720ff8e-01',
    abbreviation: 'TCENT',
    description: 'common',
    language: 'English'
  },
  {
    name: 'World English Bible',
    id: '9879dbb7cfe39e4d-01',
    abbreviation: 'WEB',
    description: 'Ecumenical',
    language: 'English'
  },
  {
    name: 'World English Bible',
    id: '9879dbb7cfe39e4d-02',
    abbreviation: 'WEB',
    description: 'Catholic',
    language: 'English'
  },
  {
    name: 'World English Bible',
    id: '9879dbb7cfe39e4d-03',
    abbreviation: 'WEB',
    description: 'Orthodox',
    language: 'English'
  },
  {
    name: 'World English Bible',
    id: '9879dbb7cfe39e4d-04',
    abbreviation: 'WEB',
    description: 'Protestant',
    language: 'English'
  },
  {
    name: 'World English Bible Updated',
    id: '72f4e6dc683324df-01',
    abbreviation: 'engWEBU',
    description: 'Ecumenical',
    language: 'English'
  },
  {
    name: 'World English Bible Updated',
    id: '72f4e6dc683324df-02',
    abbreviation: 'engWEBU',
    description: 'Protestant',
    language: 'English'
  },
  {
    name: 'World English Bible Updated',
    id: '72f4e6dc683324df-03',
    abbreviation: 'engWEBU',
    description: 'Catholic',
    language: 'English'
  },
  {
    name: 'World Messianic Bible',
    id: 'f72b840c855f362c-04',
    abbreviation: 'WMB',
    description: 'Messianic',
    language: 'English'
  },
]

export const bookIds = {
  GEN: 'Genesis',
  EXO: 'Exodus',
  LEV: 'Leviticus',
  NUM: 'Numbers',
  DEU: 'Deuteronomy',
  JOS: 'Joshua',
  JDG: 'Judges',
  RUT: 'Ruth',
  '1SA': '1 Samuel',
  '2SA': '2 Samuel',
  '1KI': '1 Kings',
  '2KI': '2 Kings',
  '1CH': '1 Chronicles',
  '2CH': '2 Chronicles',
  '1ES': '1 Esdras',
  EZR: 'Ezra',
  NEH: 'Nehemiah',
  ESG: 'Esther (Greek)',
  TOB: 'Tobit',
  JDT: 'Judith',
  '1MA': '1 Maccabees',
  '2MA': '2 Maccabees',
  '3MA': '3 Maccabees',
  JOB: 'Job',
  PSA: 'Psalms',
  MAN: 'Prayer of Manasses',
  PRO: 'Proverbs',
  ECC: 'Ecclesiastes',
  SNG: 'Song of Solomon',
  WIS: 'Wisdom of Solomon',
  SIR: 'Sirach',
  HOS: 'Hosea',
  AMO: 'Amos',
  MIC: 'Micah',
  JOL: 'Joel',
  OBA: 'Obadiah',
  JON: 'Jonah',
  NAM: 'Nahum',
  HAB: 'Habakkuk',
  ZEP: 'Zephaniah',
  HAG: 'Haggai',
  ZEC: 'Zechariah',
  MAL: 'Malachi',
  ISA: 'Isaiah',
  JER: 'Jeremiah',
  BAR: 'Baruch',
  LAM: 'Lamentations',
  EZK: 'Ezekiel',
  DAG: 'Daniel (Greek)',
  '4MA': '4 Maccabees',
  MAT: 'Matthew',
  MRK: 'Mark',
  LUK: 'Luke',
  JHN: 'John',
  ACT: 'Acts',
  ROM: 'Romans',
  '1CO': '1 Corinthians',
  '2CO': '2 Corinthians',
  GAL: 'Galatians',
  EPH: 'Ephesians',
  PHP: 'Philippians',
  COL: 'Colossians',
  '1TH': '1 Thessalonians',
  '2TH': '2 Thessalonians',
  '1TI': '1 Timothy',
  '2TI': '2 Timothy',
  TIT: 'Titus',
  PHM: 'Philemon',
  HEB: 'Hebrews',
  JAS: 'James',
  '1PE': '1 Peter',
  '2PE': '2 Peter',
  '1JN': '1 John',
  '2JN': '2 John',
  '3JN': '3 John',
  JUD: 'Jude',
  REV: 'Revelation'
}

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

export function getPassageFromChapter(original, translated, start, end) {
  const translatedVersesArray = original.split(/\[\d+\]/);
  const originalVersesArray = translated.split(/\[\d+\]/);
  const translatedPassage = translatedVersesArray.splice(start, end).map(verse => verse.trim()).join(' ');
  const originalPassage = originalVersesArray.splice(start, end).map(verse => verse.trim()).join(' ');
  const data = {
    translatedPassage,
    originalPassage,
  }
  return data;
}

export function getChapterFromAbbr(abbr) {
  const booksObj = [{ name: 'Genesis', id: 'GEN' }, { name: 'Exodus', id: 'EXO' }, { name: 'Leviticus', id: 'LEV' },
    { name: 'Numbers', id: 'NUM' }, { name: 'Deuteronomy', id: 'DEU' }, { name: 'Joshua', id: 'JOS' },
    { name: 'Judges', id: 'JDG' }, { name: 'Ruth', id: 'RUT' }, { name: '1 Samuel', id: '1SA' }, { name: '2 Samuel', id: '2SA' },
    { name: '1 Kings', id: '1KI' }, { name: '2 Kings', id: '2KI' }, { name: '1 Chronicles', id: '1CH' },
    { name: '2 Chronicles', id: '2CH' }, { name: '1 Esdras', id: '1ES' }, { name: 'Ezra', id: 'EZR' },
    { name: 'Nehemiah', id: 'NEH' }, { name: 'Esther (Greek)', id: 'ESG' }, { name: 'Tobit', id: 'TOB' },
    { name: 'Judith', id: 'JDT' }, { name: '1 Maccabees', id: '1MA' }, { name: '2 Maccabees', id: '2MA' },
    { name: '3 Maccabees', id: '3MA' }, { name: 'Job', id: 'JOB' }, { name: 'Psalms', id: 'PSA' }, 
    { name: 'Prayer of Manasses', id: 'MAN' }, { name: 'Proverbs', id: 'PRO' }, { name: 'Ecclesiastes', id: 'ECC' },
    { name: 'Song of Solomon', id: 'SNG' }, { name: 'Wisdom of Solomon', id: 'WIS' }, { name: 'Sirach', id: 'SIR' },
    { name: 'Hosea', id: 'HOS' }, { name: 'Amos', id: 'AMO' }, { name: 'Micah', id: 'MIC' }, { name: 'Joel', id: 'JOL' },
    { name: 'Obadiah', id: 'OBA' }, { name: 'Jonah', id: 'JON' }, { name: 'Nahum', id: 'NAM' }, { name: 'Habakkuk', id: 'HAB' },
    { name: 'Zephaniah', id: 'ZEP' }, { name: 'Haggai', id: 'HAG' }, { name: 'Zechariah', id: 'ZEC' },
    { name: 'Malachi', id: 'MAL' }, { name: 'Isaiah', id: 'ISA' }, { name: 'Jeremiah', id: 'JER' },
    { name: 'Baruch', id: 'BAR' }, { name: 'Lamentations', id: 'LAM' }, { name: 'Ezekiel', id: 'EZK' },
    { name: 'Daniel (Greek)', id: 'DAG' }, { name: '4 Maccabees', id: '4MA' }, { name: 'Matthew', id: 'MAT' },
    { name: 'Mark', id: 'MRK' }, { name: 'Luke', id: 'LUK' }, { name: 'John', id: 'JHN' }, { name: 'Acts', id: 'ACT' }, 
    { name: 'Romans', id: 'ROM' }, { name: '1 Corinthians', id: '1CO' }, { name: '2 Corinthians', id: '2CO' },
    { name: 'Galatians', id: 'GAL' }, { name: 'Ephesians', id: 'EPH' }, { name: 'Philippians', id: 'PHP' },
    { name: 'Colossians', id: 'COL' }, { name: '1 Thessalonians', id: '1TH' }, { name: '2 Thessalonians', id: '2TH' },
    { name: '1 Timothy', id: '1TI' }, { name: '2 Timothy', id: '2TI' }, { name: 'Titus', id: 'TIT' },
    { name: 'Philemon', id: 'PHM' }, { name: 'Hebrews', id: 'HEB' }, { name: 'James', id: 'JAS' }, { name: '1 Peter', id: '1PE' },
    { name: '2 Peter', id: '2PE' }, { name: '1 John', id: '1JN' }, { name: '2 John', id: '2JN' },
    { name: '3 John', id: '3JN' }, { name: 'Jude', id: 'JUD' }, { name: 'Revelation', id: 'REV' }
  ]
  const [bookAbbr, chapterNum] = abbr.split('.');
  const book = booksObj.find(obj => obj.id === bookAbbr).name;
  return `${book} ${chapterNum}`;
}

export function formatChapter(text) {
  const paragraphs = text.split("\n");
  return paragraphs
}
