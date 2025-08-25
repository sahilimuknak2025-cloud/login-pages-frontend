import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './forgot-password.html',
  styleUrls: ['./forgot-password.scss']
})
export class ForgotPassword {
  step = 1;
  mobileNumber: string = '';
  otp: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  constructor(private router: Router) {}

  sendOtp() {
    console.log('Sending OTP to', this.mobileNumber);
    this.step = 2;
  }

  verifyOtp() {
    console.log('Verifying OTP', this.otp);
    this.step = 3;
  }

  resetPassword() {
    if (this.newPassword !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    console.log('Resetting password for', this.mobileNumber);

   
    alert('Password reset successfully!');
    this.router.navigate(['/']); 
  }
}
