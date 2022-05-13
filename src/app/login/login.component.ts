import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registrationModel={
    email:'',
    password:''
  }
  successMessage:string ="";
  loginForm!: FormGroup; 
  constructor(private fb: FormBuilder,private apiservice:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:['',[Validators.required, Validators.pattern("[A-Za-z0-9]*@gmail.com")]],
      password:['',[Validators.required,Validators.pattern("[A-Za-z0-9@!_]{6,}")]]
    })
  }

  login(){
    this.successMessage="Please wait logging in..."
     console.log(this.loginForm)
  }

  onLogin(){
    this.apiservice.login(this.loginForm.value)
    .subscribe((res)=>{
      console.log(res);
     this.router.navigate(['/home'])
    }, err =>{
      alert("Admin Username is required !")
    } )

  }
  navigateLaptop(laptop:any){this.router.navigate(['/category-list',laptop])}
}

