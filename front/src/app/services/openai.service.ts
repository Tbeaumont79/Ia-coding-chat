import { Injectable, signal } from '@angular/core';
import { Openairesponse } from '../models/openairesponse';

@Injectable({
  providedIn: 'root',
})
export class OpenaiService {
  data = signal<Openairesponse[]>([]);
  prompt = '';
  async sendAiRequest() {
    try {
      const response = await fetch('http://localhost:8000/generate-text', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: this.prompt }),
      });
      const responseJson = await response.json();
      this.data.set(responseJson.choices[0].message.content);
      return responseJson;
    } catch (error) {
      console.error(error);
      return [];
    }
  }
  setPrompt(prompt: string) {
    this.prompt = prompt;
  }
  getPrompt() {
    return this.prompt;
  }
}
