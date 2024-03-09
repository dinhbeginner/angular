import { Component } from '@angular/core';
import { AuthService } from './lab9/auth.service';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LAB';

  constructor(private authService: AuthService, private router: Router) { }

  isAuthenticated() {
    return this.authService.isAuthenticated;
  }
  isAdmin() {
    return this.authService.isAdmin;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['']); // Navigate to login page after logout
    this.refreshPage(); // Refresh the page
  }

  refreshPage() {
    window.location.href = 'http://localhost:4200/';
  }
}
