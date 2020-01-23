import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin:FormGroup;
  submited:boolean = false;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      login: ["", [Validators.required]],
      senha: ["", [Validators.required]]
      });
  }

submitForm(){
  this.submited = true;
  if(!this.formLogin.invalid){

  }
}

resetForm(){
  this.submited = false;
}  

}
