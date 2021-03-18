import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  accountDetails: any = {
    1001: { accno: 1001, name: "Amal", bal: 3000, pass: "user1" },
    1002: { accno: 1002, name: "Arun", bal: 5000, pass: "user2" },
    1003: { accno: 1003, name: "Ajay", bal: 7000, pass: "user3" },
    1004: { accno: 1004, name: "Hari", bal: 6000, pass: "user4" },
  }
  constructor() { }
  registerData(accno: any, name: any, bal: any, pass: any) {
    if (accno in this.accountDetails) {
      alert("User Exists! Please Login ");
      return false;
    }
    else {
      this.accountDetails[accno] = {
        accno,
        name,
        bal,
        pass
      }
      alert(`Registration Successful!\n`)
      console.log(this.accountDetails);
    }
    return true;
  }
}
