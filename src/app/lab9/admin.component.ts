// login.component.ts
import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  template: `
    <div class="col-lg-12 justify-center pt-5">
      <h3 class="text-center">Login</h3>
      <form (ngSubmit)="submit()" #myForm="ngForm">
          <div class="form-group">
              <label for="email">Email</label>
              <input type="email" [(ngModel)]="email" name="email" id="email" class="form-control" placeholder="Email Address" required>
          </div>
          <div class="form-group">
              <label for="pass">Password</label>
              <input type="password" [(ngModel)]="password" minlength="8" name="password" id="pass" autoComplete="on" class="form-control" placeholder="Password" required>
          </div>
          <button type="submit" [disabled]="myForm.form.invalid" class="btn btn-primary">Submit</button>
      </form>
      <div *ngIf="message" class="text-center mt-3">{{ message }}</div> <!-- Display message here -->
    </div>
  `,
  styles: []
})
export class AdminComponent {
  email: string = '';
  password: string = '';
  message: string = ''; // Message to be displayed to the user

  constructor(private authService: AuthService) { }

  submit() {
    this.authService.loginadmin(this.email, this.password).subscribe(
      (response) => {
        console.log('Login successful', response);
        this.message = 'Login successful';
        // Optionally, you can redirect the user to another page upon successful login
      },
      (error) => {
        console.error('Login failed:', error);
        this.message = 'Login failed: ' + error;
        // Handle error (e.g., show error message to the user)
      }
    );
  }
}
