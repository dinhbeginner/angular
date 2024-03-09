import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginForm, RegisterForm } from './auth';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: boolean = false;
  isAdmin: boolean = false;
  isLoading: boolean = false;

  constructor(private router: Router,
    private http: HttpClient) { }


  private baseURLuser = `http://localhost:3000/user`;
  private baseURLadmin = `http://localhost:3000/admin`;



  login(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.isAuthenticated = true;
    this.router.navigate(['']);
    return this.http.post<any>(`${this.baseURLuser}`, { email, password }, { headers }).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'Unknown error occurred';
        if (error.error instanceof ErrorEvent) {
          // Client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // Server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.error.message || error.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
      })
    );
  }

  register(form: RegisterForm): Observable<any> {
    if (form.password !== form.confirmpassword) {
      // Passwords don't match, return an Observable error
      return throwError('Passwords do not match');
    } else {
      // Send POST request to API with form data
      return this.http.post<any>(this.baseURLuser, form).pipe(
        catchError(error => {
          return throwError(error);
        })
      );
    }
  }

  logout() {
    // Code for logout method
    // Clear token from local storage or session storage
    localStorage.removeItem('token');
    // Update isAuthenticated flag
    this.isAuthenticated = false;
    // Redirect to login page or desired route upon logout
    this.router.navigate(['/login']); // Change '/login' to your login page route
  }



  loginadmin(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.isAdmin = true;
    this.router.navigate(['']);
    return this.http.post<any>(`${this.baseURLadmin}`, { email, password }, { headers }).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'Unknown error occurred';
        if (error.error instanceof ErrorEvent) {
          // Client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // Server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.error.message || error.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
      })
    );
  }


}
