import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user_acc = "";
  user_pwd1 = "";
  user_pwd2 = "";
  user_name = "";
  initial_bal = "";
  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
  }
  Register() {
    //window.location.href="";

    // alert(`Registration Successful!\n`)
    //console.log(parseInt(this.user_acc),this.user_name,this.user_pwd1,parseInt(this.initial_bal));
    if (this.user_pwd1 == this.user_pwd2) {
      var result = this.dataService.registerData(parseInt(this.user_acc), this.user_name, parseInt(this.initial_bal), this.user_pwd1);
      this.router.navigateByUrl("");
    }
    else {
      alert("Password Mismatch! Try again");
      this.user_pwd1 = "";
      this.user_pwd2 = "";
    }

  }
}
