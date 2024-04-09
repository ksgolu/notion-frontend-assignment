import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImageCardComponent } from './image-card.component';

describe('ImageCardComponent', () => {
  let component: ImageCardComponent;
  let fixture: ComponentFixture<ImageCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ImageCardComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(ImageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.data.imgUrl).toBe('');
    expect(component.data.title).toBe('');
    expect(component.data.imgUrl).toBe('');
  });

  it('should display input data correctly', () => {
    const data = {
      imgUrl: 'https://example.com/image.jpg',
      title: 'Test Image',
      description: 'this is test',
      step: '1',
    };

    component.data = data;
    fixture.detectChanges();
    expect(component.data.imgUrl).toEqual(data.imgUrl);
    expect(component.data.title).toEqual(data.title);
    expect(component.data.description).toEqual(data.description);
    expect(component.data.step).toEqual(data.step);
  });
});
