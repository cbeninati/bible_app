import express from "express";
import bodyParser from 'body-parser';
import { getGroqChatStream } from '../controllers/llm-api-controller.js';

const router = express();
router.use(bodyParser.json());
let sessionData = {};

router.post('/init', async (req, res) => {
  const { original, translated } = req.body;
  sessionData['originalPassage'] = original;
  sessionData['translatedPassage'] = translated;
  console.log(sessionData);
  res.json({ message: 'Initialization successful' });
})

router.get('/', async (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders();

   try {
        const stream = await getGroqChatStream(sessionData.translatedPassage, sessionData.originalPassage);
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
