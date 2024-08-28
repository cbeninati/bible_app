import Groq from "groq-sdk";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();
const groqApiKey = "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";
const groq = new Groq({ apiKey: groqApiKey });

export async function main() {
  const stream = await getGroqChatStream("John 21: 25", "And there are also many other things which Jesus did, the which if they should be written every one, I suppose that even the world itself would not contain the books that should be written.", " Ἔστι δὲ καὶ ἄλλα πολλὰ ὅσα ἐποίησεν ὁ Ἰησοῦς, ἅτινα ἐὰν γράφηται καθ᾽ ἕν, οὐδὲ αὐτὸν οἶμαι τὸν κόσμον χωρῆσαι τὰ γραφόμενα βιβλία. Ἀμήν.");
  // Print the completion returned by the LLM.
  for await (const chunk of stream) {
    // Print the completion returned by the LLM.
    console.log(chunk.choices[0]?.delta?.content || "");
  }
}

export async function getGroqChatStream(verseReference, originalVerse, translatedVerse) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "you are a Biblical scholar providing insight about Biblical texts. Focus on interpreting the original language and how it's been translated. Get straight to the point.",
      },
      {
        role: "user",
        content:
          `I want to understand the nuances about the following biblical text that are lost in translation from the original language to English.\n
          The verse is ${verseReference}.\n
          Here is the english version: ${translatedVerse}\n
          Here is the verse in the original language: ${originalVerse}`,
      },
    ],

    model: "llama-3.1-70b-versatile",
    temperature: 0.75,
    max_tokens: 1024,
    top_p: 1,
    stream: true,
  });
}



// export async function getGroqChatStream(verseReference, originalVerse, translatedVerse) {
//   return axios({
//     method: 'post',
//     url: 'https://api.groq.com/openai/v1/chat/completions', // Replace with your Groq API endpoint
//     headers: {
//       'Authorization': `Bearer ${groqApiKey}`,
//       'Content-Type': 'application/json',
//     },
//     data: {
//       messages: [
//         {
//           role: "system",
//           content: "you are a Biblical scholar providing insight about Biblical texts. Focus on interpreting the original language and how it's been translated. Get straight to the point.",
//         },
//         {
//           role: "user",
//           content:
//             `I want to understand the nuances about the following biblical text that are lost in translation from the original language to English.\n
//             The verse is ${verseReference}.\n
//             Here is the english version: ${translatedVerse}\n
//             Here is the verse in the original language: ${originalVerse}`,
//         },
//       ],
//       model: "llama-3.1-70b-versatile",
//       temperature: 0.75,
//       max_tokens: 1024,
//       top_p: 1,
//       stream: true,
//     },
//     responseType: 'stream',
//   });
// }

