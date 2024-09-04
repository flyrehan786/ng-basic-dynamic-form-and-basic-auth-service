import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  formConfig = {
    page: 'login',
    fields: [
      {
        type: 'text',
        name: 'username',
        label: 'Username',
        placeholder: 'Enter your username',
        required: true,
        pattern: 'rehan'
      },
      {
        type: 'password',
        name: 'password',
        label: 'Password',
        placeholder: 'Enter your password',
        required: true,
      },
    ],
  };
  ngOnInit(): void {
  }

}
