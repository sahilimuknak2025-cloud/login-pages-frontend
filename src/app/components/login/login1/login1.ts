import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { NzMessageService } from 'ng-zorro-antd/message';


@Component({
  selector: 'app-login1',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login1.html',
  styleUrls: ['./login1.scss']
})
export class Login1 {
  showPassword: boolean = false;
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private api: ApiService, private message: NzMessageService) {
    this.userForm = this.fb.group({
      email: ['', [
        Validators.required,
        this.emailValidator
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/)
      ]]
    });
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  emailValidator(control: AbstractControl): ValidationErrors | null {
    const value: string = control.value;
    if (!value) return null;

    const regex = /^[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

    if (!regex.test(value)) {
      return { invalidCharacters: true };
    }
    return null;
  }

  onSubmit(): void {
    if (!this.userForm.valid) {
      this.userForm.markAllAsTouched();
      const errors = this.getFormErrors();
      this.message.warning(errors.join('\n'));
      return;
    }

    const loginData = this.userForm.value;

    this.api.login(loginData).subscribe({
      next: (res: any) => {
        this.message.success(res.message || 'User Login Successfully!');
        this.userForm.reset();
      },
      error: (err: any) => {
        let errorMessage = 'Login failed'!


        if (err.status === 404) {
          errorMessage = 'User not found';
        } else if (err.status === 401) {
          errorMessage = 'Password is incorrect';
        } else if (err.status === 400) {
          errorMessage = 'Email is incorrect';
        } else if (err.error && err.error.message) {
          errorMessage = err.error.message;
        }

        this.message.error(errorMessage);
      }
    });
  }

  private getFormErrors(): string[] {
    const errorMessages: string[] = [];

    const emailErrors = this.userForm.get('email')?.errors;
    if (emailErrors) {
      if (emailErrors['required']) errorMessages.push('Email is required');
      if (emailErrors['invalidCharacters']) errorMessages.push('Email contains invalid characters');
    }

    const passErrors = this.userForm.get('password')?.errors;
    if (passErrors) {
      if (passErrors['required']) errorMessages.push('Password is required');
      if (passErrors['pattern']) errorMessages.push('Password must include uppercase, lowercase, number, and special character');
    }

    return errorMessages;
  }
}