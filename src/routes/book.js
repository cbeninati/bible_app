import express from 'express';
import { getBooks } from '../controllers/api-controller.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const { version, abbr } = req.query;
  const bookList = await getBooks(version);

  res.render('book', {
    version,
    abbr,
    bookList,
  });
});

export default router;
