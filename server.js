import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import ejs from "ejs";
import { getBibleVersions } from "./src/controllers/api-controller.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 8080;
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public', 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get('/', async (req, res) => {
  const bibleVersions = await getBibleVersions();
  res.render('index', { bibleVersions });
  res.sendFile(path.join(__dirname, "public", "views", "index.html"));
});

