import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

async function run(prompt) {
  const result = await model.generateContent(prompt);
  const response = result.response;
  const text = response.text();
  return text;
}

export default run;

