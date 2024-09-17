import Groq from "groq-sdk";
import dotenv from "dotenv";

dotenv.config();
const groqApiKey = process.env.GROQ_API_KEY;
const groq = new Groq({ apiKey: groqApiKey });

export async function getGroqChatStream(originalPassage, translatedPassage) {
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
          Here is the english version: ${translatedPassage}\n
          Here is the verse in the original language: ${originalPassage}`,
      },
    ],

    model: "llama-3.1-70b-versatile",
    temperature: 0.75,
    max_tokens: 1024,
    top_p: 1,
    stream: true,
  });
}

