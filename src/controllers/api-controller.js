import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.API_KEY;

export async function getBibleVersions() {
  try {
    const response = await axios.get('https://api.scripture.api.bible/v1/bibles?language=eng', {
      headers: {
        'api-key': API_KEY
      }
    });

    const versions = response.data.data.map(data => {
      return {
        name: data.name,
        id: data.id,
        abbreviation: data.abbreviation,
        description: data.description,
        language: data.language.name,
      };
    });

    return versions;
  } catch (error) {
    console.error('Error fetching Bible versions:', error.message);
    throw error;
  }
}

export async function getBooks(bibleVersionID) {
  try {
    const response = await axios.get(`https://api.scripture.api.bible/v1/bibles/${bibleVersionID}/books`, {
      headers: {
        'api-key': process.env.API_KEY,
      },
    });

    const books = response.data.data.map(({ name, id }) => {
      return { name, id };
    });

    return books;
  } catch (error) {
    console.error('Error fetching books:', error.message);
    throw error;
  }
}

export async function getChapters(versionID, bookID) {
  try {
    const response = await axios.get(`https://api.scripture.api.bible/v1/bibles/${versionID}/books/${bookID}/chapters`, {
      headers: {
        'api-key': process.env.API_KEY
      }
    });

    return response.data.data;
  } catch (error) {
    console.error('Error fetching books:', error.message);
    throw error;
  }
}

export async function getChapter(versionID, chapterID) {
  try {
    const response = await axios.get(`https://api.scripture.api.bible/v1/bibles/${versionID}/chapters/${chapterID}`, {
      headers: {
        'api-key': process.env.API_KEY
      }
    });

    return response.data.data;
  } catch (error) {
    console.error('Error fetching books:', error.message);
    throw error;
  }
}

export async function getTranslatedVerse() {
  
}

export async function getOriginalVerse() {

}
