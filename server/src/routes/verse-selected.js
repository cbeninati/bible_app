import express from 'express';
import { getVerse } from '../controllers/bible-api-controller.js';
import { getOriginalVerse } from '../utils/helper-functions.js';
import { getGroqChatCompletion } from '../controllers/llm-api-controller.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const { version, abbr, book, chapter, verse } = req.query;
  const originalVerse = await getOriginalVerse(verse, book);
  const translatedVerse = await getVerse(version, verse);
  const llmObject = await getGroqChatCompletion(translatedVerse.reference, originalVerse.content, translatedVerse.content);
  const llmText = llmObject.choices[0]?.message?.content || "";
  const llmTextParagraphs = llmText.split("\n");

  res.json({
    version,
    abbr,
    book,
    chapter,
    translatedVerse,
    originalVerse,
    llmTextParagraphs,
  })
});

export default router;
