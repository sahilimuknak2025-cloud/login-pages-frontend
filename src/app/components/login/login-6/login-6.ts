import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl,  ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-6',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login-6.html',
  styleUrls: ['./login-6.scss']
})
export class Login6 {
  showPassword = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
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

  emailValidator(control: AbstractControl): ValidationErrors | null {
    const value: string = control.value;
    if (!value) return null;

    const regex = /^[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

    if (!regex.test(value)) {
      return { invalidCharacters: true };
    }
    return null;
  }
 
  onSaveUser() {
    if (this.userForm.valid) {
      console.log('Form Data:', this.userForm.value);
       alert("Login successful!");
    } else {
      this.userForm.markAllAsTouched();
    
       let errorMessages: string[] = [];
      const emailErrors = this.userForm.get('email')?.errors;
      if (emailErrors) {
        if (emailErrors['required']) {
          console.error("Email is required");
          errorMessages.push("Email is required");
        }
        if (emailErrors['invalidCharacters']) {
          console.error("Email contains invalid characters");
           errorMessages.push("Email contains invalid characters");
        }
      }


      const passErrors = this.userForm.get('password')?.errors;
      if (passErrors) {
        if (passErrors['required']) {
          console.error("Password is required");
           errorMessages.push("Password is required");
          
        }

        if (passErrors['pattern']) {
          console.error("Password must include uppercase, lowercase, number, and special character");
           errorMessages.push("Password must include uppercase, lowercase, number, and special character");
        }
      }
       if (errorMessages.length > 0) {
      alert(errorMessages.join("\n"));
    }
    }
  }
}

