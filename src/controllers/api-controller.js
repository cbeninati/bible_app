import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export async function getBibleVersions() {
  try {
    const response = await axios.get('https://api.scripture.api.bible/v1/bibles?language=eng', {
      headers: {
        'api-key': process.env.API_KEY
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
