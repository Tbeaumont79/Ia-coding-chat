import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAiAnswerComponent } from './display-ai-answer.component';

describe('DisplayAiAnswerComponent', () => {
  let component: DisplayAiAnswerComponent;
  let fixture: ComponentFixture<DisplayAiAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayAiAnswerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayAiAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
