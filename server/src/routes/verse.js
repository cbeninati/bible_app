import express from 'express';
import { getChapter } from "../controllers/bible-api-controller.js";

const router = express.Router();

router.get('/', async (req, res) => {
  const { version, abbr, chapter } = req.query;
  const chapterData = await getChapter(version, chapter);
  const verseCount = Number(chapterData.verseCount);
  const contents = chapterData.content;
  const book = chapterData.bookId;
  res.render('verse', {
    version,
    verseCount,
    contents,
    abbr,
    chapterData,
    book
  })
});

export default router;
