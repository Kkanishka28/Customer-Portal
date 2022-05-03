import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

 
 
  export class SignupComponent implements OnInit {
    loginForm = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      password: new FormControl('',[Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
      name: new FormControl('',[Validators.required]),
      companyName:new FormControl('')
    })
    alert:boolean=false
    get email(){
      return this.loginForm.get('email')
    }
    get password(){
      return this.loginForm.get('password')
    }
   
  
    
    closeAlert(){
      this.alert=false
    }
    signUser(){
      this.alert=true;
    }
  
    constructor(private router: Router) { 
      
    }
    
    
    ngOnInit(): void {
      
    }
  
  }
  
