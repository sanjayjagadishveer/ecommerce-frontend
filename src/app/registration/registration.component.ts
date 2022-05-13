import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
    
  registrationForm!:FormGroup;
  submitted:boolean=false;

  constructor(private fb:FormBuilder,private apiService:ApiService) {
    this.registrationForm=this.fb.group({
    
      fullName:['',Validators.required],
      email:['',Validators.required],
      phoneNumber:[
        '',
        [
          Validators.required,
          Validators.min(1000000000),
          Validators.max(9999999999),
        ],
      ],
      password:['',Validators.required],
      confirmPassword:['',Validators.required],
      });




   }

  ngOnInit(): void {
  }
  onRegister(){
    this.apiService.register(this.registrationForm.value)
    .subscribe((res)=>{
      console.log(res);
      window.alert("Register Sucessfully!")
    
    
    })

  }
}