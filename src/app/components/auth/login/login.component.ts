import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClient,} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient,private router:Router) {
  }

  onSubmit() {
    // Add your login logic here
    console.log('Email:', this.email);
    console.log('Password:', this.password);

   const obj = {
      "email": this.email,
      "password": this.password
    }

    this.http.post('http://127.0.0.1:8000/api/login',obj).subscribe((res: any) => {
      if (res.status == 200) {
        alert("login successful")
        localStorage.setItem('token', res.jwt);
        this.router.navigateByUrl('/dashboard');
      } else {
        alert("Invalid email or password")
      }
    })
  }
}
