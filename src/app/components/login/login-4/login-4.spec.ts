import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Login4 } from './login-4';

describe('Login4', () => {
  let component: Login4;
  let fixture: ComponentFixture<Login4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Login4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Login4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
