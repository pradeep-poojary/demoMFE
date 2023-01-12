import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private router: Router,
    private registrationService: RegistrationService,
    private formBuilder: FormBuilder){
      this.registerForm = new FormGroup({
        id: new FormControl('', []),
        name: new FormControl('', []),
        gender: new FormControl('', []),
        email: new FormControl('', []),
        status: new FormControl('', []),
      });
    
    }

    ngOnInit() {
   
    }   

  onRegister() {
    var data: any = {
      name: this.registerForm.controls['name'].value,
      email: this.registerForm.controls['email'].value,
      gender: this.registerForm.controls['gender'].value,
      status: this.registerForm.controls['status'].value,
    };
    // this.users.push(data);
 
    this.registrationService.register(data).subscribe((res: any) => {
      console.log(res, 'data');
    });  

    alert(
      'SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4)
    );
    this.router.navigateByUrl('login');
       
  }

  Back() {
    
  }
 

  onSubmit() {
    
    this.router.navigateByUrl('login');
   
  }

}
