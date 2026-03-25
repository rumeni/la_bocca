import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'No API key' }, { status: 500 });
    }

    const ai = new GoogleGenAI({ apiKey });
    const publicDir = path.join(process.cwd(), 'public');
    const files = fs.readdirSync(publicDir).filter(f => f.endsWith('.png') && f !== 'logo.png');
    
    const results = [];
    
    for (const file of files) {
      const filePath = path.join(publicDir, file);
      const data = fs.readFileSync(filePath);
      const base64Data = data.toString('base64');
      
      const response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-preview',
        contents: [
          {
            parts: [
              {
                inlineData: {
                  mimeType: 'image/png',
                  data: base64Data
                }
              },
              {
                text: 'Describe this image in 5-10 words. What is the main subject?'
              }
            ]
          }
        ]
      });
      
      results.push({
        file,
        description: response.text
      });
    }
    
    return NextResponse.json({ results });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
