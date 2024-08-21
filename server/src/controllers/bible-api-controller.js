import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const BIBLE_API_KEY = process.env.BIBLE_API_KEY;

export async function getBibleVersions() {
  try {
    const response = await axios.get('https://api.scripture.api.bible/v1/bibles?language=eng', {
      headers: {
        'api-key': BIBLE_API_KEY
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
        'api-key': BIBLE_API_KEY,
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
        'api-key': BIBLE_API_KEY
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
    const response = await axios.get(`https://api.scripture.api.bible/v1/bibles/${versionID}/chapters/${chapterID}?content-type=text`, {
      headers: {
        'api-key': BIBLE_API_KEY
      }
    });
    console.log("new: ", response.data.data);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching books:', error.message);
    throw error;
  }
}

export async function getVerse(versionID, verseID) {
  try {
    const response = await axios.get(`https://api.scripture.api.bible/v1/bibles/${versionID}/verses/${verseID}?content-type=text&include-chapter-numbers=false&include-verse-numbers=false`, {
      headers: {
        'api-key': BIBLE_API_KEY
      }
    });

    return response.data.data;
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('Error fetching books:', {
        message: error.message,
        status: error.response.status,
        data: error.response.data, // This is the response data from the server
      });
    } else if (error.request) {
      // The request was made but no response was received
      console.error('Error fetching books: No response received', {
        message: error.message,
        request: error.request, // Useful to debug issues with the request itself
      });
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error setting up the request:', {
        message: error.message,
      });
    }
  }
}
