import express from 'express';
import { getChapters } from '../controllers/api-controller.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const { version, abbr, book } = req.query;
  const chapters = await getChapters(version, book);

  res.render('chapter', {
    version,
    book,
    abbr,
    chapters,
  });
});

export default router;
