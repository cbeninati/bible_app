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

export function formatChapter(text) {
  const paragraphs = text.split("\n");
  return paragraphs
}

