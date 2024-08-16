import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { getBibleVersions } from "./src/controllers/bible-api-controller.js";
import bookRouter from "./src/routes/book.js";
import chapterRouter from "./src/routes/chapter.js";
import verseRouter from "./src/routes/verse.js";
import verseSelectedRouter from "./src/routes/verse-selected.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT;
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public', 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/book', bookRouter);
app.use('/chapters', chapterRouter);
app.use('/verse', verseRouter);
app.use('/verse-selected', verseSelectedRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get('/', async (req, res) => {
  const bibleVersions = await getBibleVersions();
  res.render('index', { bibleVersions });
});

