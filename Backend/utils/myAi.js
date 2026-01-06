import "dotenv/config";
import { GoogleGenAI } from "@google/genai";


const getAiResponse = async (message) => {
  const ai = new GoogleGenAI({ apiKey: process.env.Gemini_API_KEY });
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: message,
  });
  return response.text ;
}

