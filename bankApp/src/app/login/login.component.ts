import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  accountDetails = {
    1000: { accno: 1000, name: "Amal", bal: 3000, pass: "user1" },
    1001: { accno: 1001, name: "Arun", bal: 5000, pass: "user2" },
    1002: { accno: 1002, name: "Ajay", bal: 7000, pass: "user3" },
    1003: { accno: 1003, name: "Hari", bal: 6000, pass: "user4" },
  }
  // temp_data="Testing by Interpolation";
  user_acc="";
  user_pwd="";
  constructor() { }

  ngOnInit(): void {
  }
  getUsername(event: any)
  {
    this.user_acc=event.target.value;
    console.log(this.user_acc);
  }
  getPassword(event: any)
  {
    this.user_pwd=event.target.value;
    console.log(this.user_pwd);
  }
  login() {
    alert("log in works");
    // let user_acc = document.querySelector("#user_accno").value;
    // let user_pwd = document.querySelector("#user_pass").value;
    // var data = bank.getAccountDetails();
    // if (user_acc in data) {
    //   //console.log(data[user_acc]["pass"]);
    //   //alert(user_acc);
    //   if (user_pwd == data[user_acc]["pass"]) {
    //     alert("Authentication Successful");
    //     window.location.href = "userhome.html";
    //   }
    //   else {
    //     alert("Password Mismatch");
    //   }

    // }
    // else {
    //   alert("Invalid Account Number!");
    // }

  }
}
