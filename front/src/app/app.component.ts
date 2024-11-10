import { Component } from '@angular/core';
import { CustomPromptInputComponent } from './components/custom-prompt-input/custom-prompt-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CustomPromptInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'front';
}
