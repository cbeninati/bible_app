import express from 'express';
import { getChapter } from "../controllers/api-controller.js";

const router = express.Router();

router.get('/', async (req, res) => {
  const { version, abbr, chapter } = req.query;
  const chapterData = await getChapter(version, chapter);
  const verseCount = Number(chapterData.verseCount);
  const contents = chapterData.content;
  res.render('verse', {
    verseCount,
    contents,
    chapterData
  })
});

export default router;
