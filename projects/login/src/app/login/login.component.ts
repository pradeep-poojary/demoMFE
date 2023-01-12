import { Component } from '@angular/core';
import {FormBuilder,FormControl,FormGroup,Validators,} from '@angular/forms';
import { Router } from '@angular/router';
import { first, Observable } from 'rxjs';
import { loginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  LoggedIn = false;
  users: any;
  loginForm: FormGroup;
  http: any;
  registerForm: FormGroup;
  successMsg = false;

  constructor(
    private router: Router,
    private loginService: loginService,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    });

    this.registerForm = new FormGroup({
      id: new FormControl('', []),
      name: new FormControl('', []),
      gender: new FormControl('', []),
      email: new FormControl('', []),
      status: new FormControl('', []),
    });

    this.loginService.get('').subscribe((res) => {
      console.log(res, '124');
      this.users = res;
      console.log(this.users, 'users');
    });
  }
  register = false;
  login = true;

  Register() {
    this.register = true;
    this.login = false;
  }

  Back() {
    this.register = false;
    this.login = true;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // this.router.navigate([`users`]);
      // this.login = false;
      // this.register = false;
      // this.LoggedIn=true;
      // this.successMsg=true;
      // console.log(JSON.stringify(this.registerForm.value, ));
      this.users.forEach((data: any) => {
        console.log( this.loginForm.controls['email'].value,data.email,"333")
        if( this.loginForm.controls['email'].value == data.email){

        this.login = false;
        this.register = false;
        this.LoggedIn = true;
        // this.successMsg = true;
        }
      });
    }
  }

  onRegister() {
    var data: any = {
      name: this.registerForm.controls['name'].value,
      email: this.registerForm.controls['email'].value,
      gender: this.registerForm.controls['gender'].value,
      status: this.registerForm.controls['status'].value,
    };
    this.users.push(data);
    console.log(this.users,"afterregi")
    this.loginService.register(data).subscribe((res: any) => {
      localStorage.setItem('userData', JSON.stringify(res));
      console.log(res, 'data');
    });

    this.register = false;
    this.login = true;
    this.successMsg = true;
    this.LoggedIn = false;
    // this.loginService.register(this.registerForm.value).subscribe((data=>{
    //   console.log(data,"data")
    // }))

    alert(
      'SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4)
    );
  }

  //   submitRegisterForm(){
  //   var data = {
  //      name : this.registerForm.controls.name.value,
  //      email : this.registerForm.controls.email.value,
  //       gender : this.registerForm.controls.gender.value,
  //      status : this.registerForm.controls.status.value,
  //   }

  //   this.loginService.createUser(data).subscribe((res:any)=>{

  //   })
  // }

  
}
