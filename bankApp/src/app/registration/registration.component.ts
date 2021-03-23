import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  // user_acc = "";
  // user_pwd1 = "";
  // user_pwd2 = "";
  // user_name = "";
  // initial_bal = "";

  registerForm = this.fb.group({
    user_acc: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern('[0-9]*')]],
    user_pwd1: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    user_pwd2: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    user_name: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    initial_bal: ['', [Validators.required, Validators.pattern('[0-9]*')]]

  });
  constructor(private router: Router, private dataService: DataService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  Register() {
    //window.location.href="";
    // console.log(this.registerForm.value);
    // console.log(this.registerForm.get('user_acc')?.errors);

    // if (this.registerForm.get('user_acc')?.errors) {
    //   alert("invalid acc no");
    // }
    if (this.registerForm.valid) {

      // alert(`Registration Successful!\n`)
      //console.log(parseInt(this.user_acc),this.user_name,this.user_pwd1,parseInt(this.initial_bal));
      if (this.registerForm.value.user_pwd1 == this.registerForm.value.user_pwd2) {
        var result = this.dataService.registerData(parseInt(this.registerForm.value.user_acc), this.registerForm.value.user_name, parseInt(this.registerForm.value.initial_bal), this.registerForm.value.user_pwd1);
        this.router.navigateByUrl("");
      }
      else {
        alert("Password Mismatch! Try again");
        this.registerForm.value.user_pwd1 = "";
        this.registerForm.value.user_pwd2 = "";
      }
    }
    else {
      alert("Invalid form");
    }

  }
}
