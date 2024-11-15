import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OpenaiService } from '../../services/openai.service';
@Component({
  selector: 'app-custom-prompt-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './custom-prompt-input.component.html',
  styleUrl: './custom-prompt-input.component.css',
})
export class CustomPromptInputComponent {
  openaiservice = inject(OpenaiService);

  prompt = this.openaiservice.getPrompt();
  sendAiRequest() {
    this.openaiservice.setPrompt(this.prompt);
    this.openaiservice.sendAiRequest();
  }
}
