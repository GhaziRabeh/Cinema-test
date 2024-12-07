import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../UserService/user-service.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  message: string = '';

  constructor(
    private fb: FormBuilder,
    private userService: UserServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onLogin(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const loginData = this.loginForm.value;

    this.userService.login(loginData).subscribe(
      (response) => {
        console.log(response);
        
        this.userService.setUser(response); // Store token and user data

        const user = this.userService.getUser(); // Get user data from local storage

        // Redirect based on user role
        if (user && user.role === 'admin') {
          this.router.navigate(['/admin/dashboard']); // Admin dashboard route
        } else {
          this.router.navigate(['/home']); // Regular user home page
        }
      },
      (error) => {
        this.message = 'Invalid email or password';
      }
    );
  }
}
