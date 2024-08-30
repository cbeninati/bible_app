import express from 'express';
import { getChapter } from "../controllers/bible-api-controller.js";
import { formatChapter } from '../utils/helper-functions.js';
const router = express.Router();

router.get('/', async (req, res) => {
  console.log("Request received from /verses!");
  const { version, abbr, chapter } = req.query;
  const chapterData = await getChapter(version, chapter);
  const chapterContent = chapterData.content;
  const paragraphs = formatChapter(chapterContent);
  const book = chapterData.bookId;
  const verseCount = Number(chapterData.verseCount);
  const verseArray = [];
  for (let i = 1; i <= verseCount; i++) {verseArray.push(i)};

  res.json({
    version,
    verseArray,
    paragraphs,
    chapterContent,
    abbr,
    chapterData,
    book,
  });
});

export default router;
