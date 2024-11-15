import { Component } from '@angular/core';
import { CustomPromptInputComponent } from './components/custom-prompt-input/custom-prompt-input.component';
import { DisplayAiAnswerComponent } from './components/display-ai-answer/display-ai-answer.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CustomPromptInputComponent, DisplayAiAnswerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
