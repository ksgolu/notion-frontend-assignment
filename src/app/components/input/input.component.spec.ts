import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [InputComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle label input', () => {
    const input = 'label';
    component.label = input;
    expect(component.label).toEqual(input);
  });
  it('should handle placeholder input', () => {
    const input = 'plaveholder';
    component.placeholder = input;
    expect(component.placeholder).toEqual(input);
  });
  it('should handle type input', () => {
    const input = 'text';
    component.type = input;
    expect(component.type).toEqual(input);
  });
  it('should handle value input', () => {
    const input = 'value';
    component.value = input;
    expect(component.value).toEqual(input);
  });
});
