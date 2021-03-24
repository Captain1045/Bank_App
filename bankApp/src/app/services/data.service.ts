import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

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
  currentUser="";
  constructor(private router: Router) { 
    this.getDetails();
  }

  saveDetails()
  {
    localStorage.setItem("accountDetails",JSON.stringify(this.accountDetails));
    if(this.currentUser)
    {
      localStorage.setItem("currentUser",JSON.stringify(this.currentUser));
    }
  }
  getDetails()
  {
    if(localStorage.getItem("accountDetails"))
    {
      this.accountDetails=JSON.parse(localStorage.getItem("accountDetails")||'');
    }
    if(localStorage.getItem("currentUser"))
    {
      this.currentUser=JSON.parse(localStorage.getItem("currentUser")||'')
    }
  }

  deposit(acc_no: any, password: any, amount: any) {
    this.getDetails();
    let data = this.accountDetails;
    if (acc_no in data) {
      // alert(data[acc_no].pass);
      // alert(password);
      if ((data[acc_no].pass == password)&&(data[acc_no].name==this.currentUser)) {
        data[acc_no].bal += amount;
        alert("Available Balance = " + data[acc_no].bal);
        this.saveDetails();
      }
      else {
        alert("Incorrect data! Please try again");
        this.router.navigateByUrl("dashboard");
      }
    }
    else {
      alert("No User exist! Please try again");
    }
  }
  withdraw(acc_no: any, password: any, amount: any) {
    this.getDetails();
    let data = this.accountDetails;
    if (acc_no in data) {
      if ((data[acc_no].pass == password)&&(data[acc_no].name==this.currentUser)) {
        if (data[acc_no].bal < amount) {

          alert("Insufficient Balance\nAvailable Balance = " + data[acc_no].bal);
          this.saveDetails();
        }
        else {
          data[acc_no].bal -= amount;
          alert("Available Balance = " + data[acc_no].bal);
        }

      }
      else {
        alert("Incorrect data! Please try again");
        this.router.navigateByUrl("dashboard");
      }

    }
    else {
      alert("No User exist! Please try again");
    }

  }
  login(acc:any,pwd:any)
  {
    if (acc in this.accountDetails) {
      //console.log(data[user_acc]["pass"]);
      //alert(this.user_acc);
      if (pwd == this.accountDetails[acc]["pass"]) {
        this.currentUser=this.accountDetails[acc].name;
        this.saveDetails();
        alert("Authentication Successful");
        //window.location.href = "dashboard";
        this.router.navigateByUrl("dashboard");
      }
      else {
        alert("Incorrect Password!");
      }

    }
    else {
      alert("Invalid Account Number!");
    }
  }
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
      this.saveDetails();
      alert(`Registration Successful!\n`)
      console.log(this.accountDetails);
    }
    return true;
  }
}
