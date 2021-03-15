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

  constructor() { }

  ngOnInit(): void {
  }
  login() {
    alert("log in works");
    
  }
}
