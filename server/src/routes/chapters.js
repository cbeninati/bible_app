import express from 'express';
import { getChapters } from '../controllers/bible-api-controller.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const { version, abbr, book } = req.query;
  const chapters = await getChapters(version, book);

  res.json({
    version,
    book,
    abbr,
    chapters
  });
});

export default router;
