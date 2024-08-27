import express from "express";

const router = express();

router.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  const sendData = (data) => {
    console.log("req: ", req.query)
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  };

  // Example of sending LLM output every 5 seconds
  const intervalId = setInterval(() => {
    sendData({ message: 'Example LLM output' });
  }, 9000);

  // Clean up on connection close
  req.on('close', () => {
    clearInterval(intervalId);
    res.end();
  });
});

export default router;
