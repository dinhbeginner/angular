import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'RegisterComponent',
  template: `
    <div class="col-lg-12 justify-center pt-5">
      <h3 class="text-center">Register</h3>
      <form [formGroup]="formProduct" (ngSubmit)="addUser()">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="text" formControlName="email" id="email" class="form-control" placeholder="Email Address" aria-describedby="helpId">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" formControlName="password" id="password" autocomplete="on" class="form-control" placeholder="Password" aria-describedby="helpId">
        </div>
        <div class="form-group">
          <label for="confirm_password">Confirm Password</label>
          <input type="password" formControlName="confirmpassword" autocomplete="on" id="confirm_password" class="form-control" placeholder="Confirm Password" aria-describedby="helpId">
        </div>
        <button type="submit" class="btn btn-primary" [disabled]="formProduct.invalid">
          Submit
        </button>
        <a class="nav-link text-center" href="#" routerLink="/login">đăng nhập ngay<span
        class="sr-only">(current)</span></a>
      </form>
    </div>
  `,
  styles: []
})
export class RegisterComponent implements OnInit {
  formProduct!: FormGroup; // Sử dụng dấu chấm hỏi (!) sau tên biến

  constructor(private authService: AuthService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.formProduct = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required]
    });
  }

  addUser() {
    if (this.formProduct.valid) {
      this.authService.register(this.formProduct.value).subscribe(() => {
        this.resetForm();
      });
    }
  }

  resetForm() {
    this.formProduct.reset();
  }
}
