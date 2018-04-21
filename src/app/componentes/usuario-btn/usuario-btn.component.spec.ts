import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioBtnComponent } from './usuario-btn.component';

describe('UsuarioBtnComponent', () => {
  let component: UsuarioBtnComponent;
  let fixture: ComponentFixture<UsuarioBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
