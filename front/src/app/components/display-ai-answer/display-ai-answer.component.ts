import { Component, inject } from '@angular/core';
import { OpenaiService } from '@services/openai.service';
@Component({
    selector: 'app-display-ai-answer',
    imports: [],
    templateUrl: './display-ai-answer.component.html',
    styleUrl: './display-ai-answer.component.css'
})
export class DisplayAiAnswerComponent {
  openaiservice = inject(OpenaiService);
  data = this.openaiservice.data
}
