import { Component, inject } from '@angular/core';
import { OpenaiService } from '../../services/openai.service';
import { Openairesponse } from '../../models/openairesponse';
@Component({
  selector: 'app-display-ai-answer',
  standalone: true,
  imports: [],
  templateUrl: './display-ai-answer.component.html',
  styleUrl: './display-ai-answer.component.css',
})
export class DisplayAiAnswerComponent {
  openaiservice = inject(OpenaiService);
  data = this.openaiservice.data
}
