import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
const options = {
  withCredentials: true
}
@Injectable({
  providedIn: 'root'
})
export class DataService {

  // accountDetails: any = {
  //   1001: { accno: 1001, name: "Amal", bal: 3000, pass: "user1" },
  //   1002: { accno: 1002, name: "Arun", bal: 5000, pass: "user2" },
  //   1003: { accno: 1003, name: "Ajay", bal: 7000, pass: "user3" },
  //   1004: { accno: 1004, name: "Hari", bal: 6000, pass: "user4" },
  // }
  currentUser = "";
  constructor(private router: Router, private http: HttpClient) {

  }

  deposit(accno: any, pass: any, bal: any) {
    //console.log("dep");
    
    const data = {
      accno,
      pass,
      bal
    }
    return this.http.post("http://localhost:3000/deposit", data, options);
  }
  withdraw(accno: any, pass: any, bal: number) {
    //console.log("with");
    
    //console.log(typeof(bal));
    const data = {
      accno,
      pass,
      bal
    }
    return this.http.post("http://localhost:3000/withdraw", data, options);
  }
  login(accno: any, pass: any) {
    const data = {
      accno,
      pass
    }
    return this.http.post("http://localhost:3000/login", data, options);
  }
  registerData(accno: any, name: any, bal: any, pass: any) {
    const data = {
      accno,
      name,
      bal,
      pass
    }
    return this.http.post("http://localhost:3000/register", data, options);
  }
}
