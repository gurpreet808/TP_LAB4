import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorincheComponent } from './colorinche.component';

describe('ColorincheComponent', () => {
  let component: ColorincheComponent;
  let fixture: ComponentFixture<ColorincheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorincheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorincheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
