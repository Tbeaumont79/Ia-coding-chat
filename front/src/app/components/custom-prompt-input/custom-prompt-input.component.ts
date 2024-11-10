import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-prompt-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './custom-prompt-input.component.html',
  styleUrl: './custom-prompt-input.component.css',
})
export class CustomPromptInputComponent {
  prompt: string = '';
  async sendAiRequest() {
    console.log(this.prompt);
    const response = await fetch('http://localhost:8000/generate-text', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: this.prompt }),
    });
    const data = await response.json();
    console.log(data);
  }
}
