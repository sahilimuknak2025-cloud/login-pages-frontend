import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Login5 } from './login-5';

describe('Login5', () => {
  let component: Login5;
  let fixture: ComponentFixture<Login5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Login5]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Login5);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
