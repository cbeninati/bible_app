import express from 'express';
import { getVerse } from '../controllers/bible-api-controller.js';
import { getOriginalVerse } from '../utils/helper-functions.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const { version, abbr, book, chapter, verse } = req.query;
  const originalVerse = await getOriginalVerse(verse, book);
  const translatedVerse = await getVerse(version, verse);  

  res.json({
    version,
    abbr,
    book,
    chapter,
    translatedVerse,
    originalVerse,
  })
});


export default router;
