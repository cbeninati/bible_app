import express from 'express';
import { getVerse } from '../controllers/api-controller.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const { version, abbr, verse } = req.query;
  const translatedVerse = await getVerse(version, verse);
  const originalVerse = await getVerse("5e29945cf530b0f6-01", verse);

  res.render('verse-selected', {
    translatedVerse,
    originalVerse
  });
});

export default router;
