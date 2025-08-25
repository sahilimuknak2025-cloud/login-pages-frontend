import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Login7 } from './login-7';

describe('Login7', () => {
  let component: Login7;
  let fixture: ComponentFixture<Login7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Login7]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Login7);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
