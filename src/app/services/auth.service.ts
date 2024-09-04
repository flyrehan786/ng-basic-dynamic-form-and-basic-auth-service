import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _router: Router) { }
  login(username: string, password: string) {
    if(username == 'admin' && password == 'admin') {
      localStorage.setItem('auth-token', username);
      console.log('Login Successfully');
      this._router.navigate(['/']);
    }
  }
  isLoggedIn() {
    return (localStorage.getItem('auth-token')) ? true : false;
  }
  getDecodedToken() { return localStorage.getItem('auth-token'); }
  logout() {
    localStorage.removeItem('auth-token');
  }
}
