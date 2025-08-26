import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators, FormGroup, FormBuilder, AbstractControl, ValidationErrors } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-signup-2',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './signup-2.html',
  styleUrls: ['./signup-2.scss']
})
export class Signup2 {
  showPassword: boolean = false;
  genders = ['Male', 'Female', 'Other'];

  signupForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private message: NzMessageService
  ) {
    this.signupForm = this.fb.group({
      name: [''],
      email: ['', [Validators.required, Validators.email, this.emailValidator.bind(this)]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      age: [''],
      gender:['']
      

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

    const firstChar = value.charAt(0);
    if (firstChar !== firstChar.toLowerCase()) {
      return { firstLetterUppercase: true };
    }

    return null;
  }


  onSubmit() {
    if (!this.signupForm.valid) {
      this.signupForm.markAllAsTouched();
      this.message.warning('Please fill all fields correctly.');
      return;
    }
    const userData = this.signupForm.value;

    this.api.signup(userData).subscribe({
      next: (res: any) => {
        console.log('Signup Successful', res);
        this.message.success('User Registered Successfully!');
        this.signupForm.reset();
      },
      error: (err: any) => {
        console.error('Signup failed', err);
        if (err.error && err.error.message) {
          this.message.error(err.error.message);
        } else {
          this.message.error('Signup failed!');
        }
      }
    });
  }

}
