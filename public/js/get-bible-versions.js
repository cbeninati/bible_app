import dotenv from "dotenv";

dotenv.config();

export function getBibleVersions() {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.addEventListener(`readystatechange`, function () {
      if (this.readyState === this.DONE) {
        const { data } = JSON.parse(this.responseText);
        const versions = data.map((data) => {
          return {
            name: data.name,
            id: data.id,
            abbreviation: data.abbreviation,
            description: data.description,
            language: data.language.name,
          };
        });

        resolve(versions);
      }
    });

    xhr.open(`GET`, `https://api.scripture.api.bible/v1/bibles?language=eng`);
    xhr.setRequestHeader(`api-key`, process.env.API_KEY);

    xhr.onerror = () => reject(xhr.statusText);

    xhr.send();
  });
}
