
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import type { ChatMessage } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

const chat: Chat = ai.chats.create({
  model: 'gemini-2.5-flash',
  config: {
    systemInstruction: `אתה עוזר וירטואלי מומחה בכלי AI ליצירת מצגות ובעקרונות לעיצוב מצגות מנצחות. 
    שמות הכלים שאתה מכיר הם: Canva, Gamma, Genspark, Napkin, Claude, Lovable.
    ענה על שאלות המשתמשים בעברית. תשובותיך צריכות להיות תמציתיות, ברורות ומועילות. 
    הימנע מתשובות ארוכות מדי ושמור על טון שיחה ידידותי ומקצועי.`,
  },
});


export const getChatResponse = async (message: string): Promise<string> => {
  if (!API_KEY) {
    return "שגיאה: מפתח ה-API אינו מוגדר. לא ניתן להתחבר ל-Gemini.";
  }
  try {
    const result: GenerateContentResponse = await chat.sendMessage({ message: message });
    return result.text.trim();
  } catch (error) {
    console.error("Error fetching response from Gemini:", error);
    return "אופס, משהו השתבש. נסה שוב מאוחר יותר.";
  }
};
