import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPromptInputComponent } from './custom-prompt-input.component';

describe('CustomPromptInputComponent', () => {
  let component: CustomPromptInputComponent;
  let fixture: ComponentFixture<CustomPromptInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomPromptInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomPromptInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
