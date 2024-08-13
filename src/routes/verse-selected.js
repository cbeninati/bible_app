import express from 'express';
import { getChapters } from '../controllers/api-controller.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const { version, abbr, verse } = req.query;

  res.render('verse-selected', {
    
  });
});

export default router;
