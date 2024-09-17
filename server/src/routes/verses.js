import express from 'express';
import { getChapter } from "../controllers/bible-api-controller.js";
import { inOldTestament, getPassageFromChapter, getChapterFromAbbr } from '../utils/helpers.js';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.get('/', async (req, res) => {
  const { version, abbr, chapter } = req.query;
  const chapterData = await getChapter(version, chapter);
  let chapterDataOriginal;
  if (inOldTestament(chapter.split('.')[0])) {
    chapterDataOriginal = await getChapter(process.env.HEBREW_BIBLE_ID, chapter);
  } else {
    chapterDataOriginal = await getChapter(process.env.GREEK_BIBLE_ID, chapter);
  }
  
  // const book = chapterData.bookId;
  const verseCount = Number(chapterData.verseCount);
  const verseArray = [];
  for (let i = 1; i <= verseCount; i++) {verseArray.push(i)};

  res.json({
    version,
    verseArray,
    abbr,
    chapterData,
    chapterDataOriginal,
    // book,
  });
});

router.post('/', (req, res) => {
  const {translatedChapter, originalChapter, startValue, endValue, chapterAbbr} = req.body;
  const { translatedPassage, originalPassage } = getPassageFromChapter(originalChapter, translatedChapter, startValue, endValue);
  const chapter = getChapterFromAbbr(chapterAbbr);

})

export default router;
