"use server"
import { GoogleGenAI } from "@google/genai";
import { promises } from "dns";

const ai = new GoogleGenAI({
    apiKey:process.env.GOOGLE_GENAI_API_KEY,
});
export async function generationTextAction(prompt:string):Promise<string> {

    const interactions = await ai.interactions.create({
            model: "gemini-3.8-flash",
            input: prompt,
    });
return interactions.output_text || "No Output Generated";

}

