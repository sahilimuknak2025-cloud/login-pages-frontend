import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Login3 } from './login-3';

describe('Login3', () => {
  let component: Login3;
  let fixture: ComponentFixture<Login3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Login3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Login3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
