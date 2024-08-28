import express from "express";
import { getGroqChatStream } from '../controllers/llm-api-controller.js';
import { getVerse } from '../controllers/bible-api-controller.js';
import { getOriginalVerse } from '../utils/helper-functions.js';

const router = express();

router.get('/', async (req, res) => {
  const { version, abbr, book, chapter, verse } = req.query;

  const originalVerse = await getOriginalVerse(verse, book);
  const translatedVerse = await getVerse(version, verse);

  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders(); // Flush the headers to establish SSE with client

   try {
        const stream = await getGroqChatStream(translatedVerse.reference, originalVerse.content, translatedVerse.content);
        for await (const chunk of stream) {
          const data = {message: chunk.choices[0]?.delta?.content || ""};
          res.write(`data: ${JSON.stringify(data)}\n\n`);
        }
        req.on('close', () => {
          res.end();
        });
    } catch (error) {
        console.error('Request error:', error);
        res.write('data: [ERROR]\n\n');
        res.end();
    }
});

export default router;
