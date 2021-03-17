import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  accountDetails: any = {
    1000: { accno: 1000, name: "Amal", bal: 3000, pass: "user1" },
    1001: { accno: 1001, name: "Arun", bal: 5000, pass: "user2" },
    1002: { accno: 1002, name: "Ajay", bal: 7000, pass: "user3" },
    1003: { accno: 1003, name: "Hari", bal: 6000, pass: "user4" },
  }
  // temp_data="Testing by Interpolation";
  user_acc = "";
  user_pwd = "";
  data = this.accountDetails;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  getUsername(event: any) {
    this.user_acc = event.target.value;
    console.log(this.user_acc);
  }
  getPassword(event: any) {
    this.user_pwd = event.target.value;
    console.log(this.user_pwd);
  }
  login() {
    // var user_acc=acc.value;
    // var user_pwd=pwd.value;
    var acc=this.user_acc;
    var pwd=this.user_pwd;
    //console.log(acc,this.user_acc);
    
    

    if (acc in this.data) {
      //console.log(data[user_acc]["pass"]);
      //alert(this.user_acc);
      if (pwd == this.data[acc]["pass"]) {
        alert("Authentication Successful");
        //window.location.href = "dashboard";
        this.router.navigateByUrl("dashboard");
      }
      else {
        alert("Password Mismatch");
      }

    }
    else {
      alert("Invalid Account Number!");
    }

  }
  register()
  {
    this.router.navigateByUrl("registration");
  }
}
