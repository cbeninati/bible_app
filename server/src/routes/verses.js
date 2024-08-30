import express from 'express';
import { getChapter } from "../controllers/bible-api-controller.js";
const router = express.Router();

router.get('/', async (req, res) => {
  const { version, abbr, chapter } = req.query;
  const chapterData = await getChapter(version, chapter);
  const chapterContent = chapterData.content;
  const book = chapterData.bookId;
  const verseCount = Number(chapterData.verseCount);
  const verseArray = [];
  for (let i = 1; i <= verseCount; i++) {verseArray.push(i)};

  res.json({
    version,
    verseArray,
    chapterContent,
    abbr,
    chapterData,
    book,
  });
});

export default router;
