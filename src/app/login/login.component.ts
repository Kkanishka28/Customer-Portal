import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    password: new FormControl('',[Validators.required, Validators.minLength(6), Validators.maxLength(12)])
  })
  get email(){
    return this.loginForm.get('email')
  }
  get password(){
    return this.loginForm.get('password')
  }

  loginUser(){
    console.warn(this.loginForm);
  }

  constructor(private router: Router) { }
  btnClick(){
    var a = this.loginForm.value;
    console.log(a);
    this.router.navigateByUrl('/dashboard?username=' + a.email);
  }
  ngOnInit(): void {
  }

}
