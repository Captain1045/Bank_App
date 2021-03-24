import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, Routes } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // accountDetails: any = {
  //   1000: { accno: 1000, name: "Amal", bal: 3000, pass: "user1" },
  //   1001: { accno: 1001, name: "Arun", bal: 5000, pass: "user2" },
  //   1002: { accno: 1002, name: "Ajay", bal: 7000, pass: "user3" },
  //   1003: { accno: 1003, name: "Hari", bal: 6000, pass: "user4" },
  // }
  // temp_data="Testing by Interpolation";
  // user_acc = "";
  // user_pwd = "";
  data = this.dataService.accountDetails;
  loginForm = this.fb.group({
    user_acc: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern('[0-9]*')]],
    user_pwd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  });
  constructor(private router: Router, private dataService: DataService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  // getUsername(event: any) {
  //   this.user_acc = event.target.value;
  //   console.log(this.user_acc);
  // }
  // getPassword(event: any) {
  //   this.user_pwd = event.target.value;
  //   console.log(this.user_pwd);
  // }
  login() {
    // var user_acc=acc.value;
    // var user_pwd=pwd.value;
    if (this.loginForm.valid) {
      var acc = this.loginForm.value.user_acc;
      var pwd = this.loginForm.value.user_pwd;
      this.dataService.login(parseInt(acc),pwd);
      //console.log(acc,this.user_acc);
      // if (acc in this.data) {
      //   //console.log(data[user_acc]["pass"]);
      //   //alert(this.user_acc);
      //   if (pwd == this.data[acc]["pass"]) {
      //     alert("Authentication Successful");
      //     //window.location.href = "dashboard";
      //     this.router.navigateByUrl("dashboard");
      //   }
      //   else {
      //     alert("Incorrect Password!");
      //   }

      // }
      // else {
      //   alert("Invalid Account Number!");
      // }

    }
    else{
      alert("Please Enter valid credentials!")
    }
  }
  register() {
    this.router.navigateByUrl("registration");
  }
}
