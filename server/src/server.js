import express from "express";
import path from "path";
import cors from "cors";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { getBibleVersions } from './controllers/bible-api-controller.js';
import bookRouter from "./routes/books.js";
import chapterRouter from "./routes/chapter.js";
import verseRouter from "./routes/verse.js";
import verseSelectedRouter from "./routes/verse-selected.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT;
app.use(cors());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'client', 'views'));

app.use(express.static(path.join(__dirname, '..', 'client', 'public')));
app.use('/books', bookRouter);
app.use('/chapters', chapterRouter);
app.use('/verse', verseRouter);
app.use('/verse-selected', verseSelectedRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get('/', async (req, res) => {
  const bibleVersions = await getBibleVersions();
  res.json(bibleVersions);
});

