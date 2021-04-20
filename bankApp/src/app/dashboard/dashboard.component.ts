import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentUser=this.dataService.currentUser;

  depositForm = this.dep.group({
    deposit_user_acc: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern('[0-9]*')]],
    deposit_user_pwd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    deposit_user_amount: ['', [Validators.required, Validators.pattern('[0-9]*')]]
  });
  withdrawForm = this.dep.group({
    withdraw_user_acc: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern('[0-9]*')]],
    withdraw_user_pwd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    withdraw_user_amount: ['', [Validators.required, Validators.pattern('[0-9]*')]]
  });
  id:any;
  name:any;
  constructor(private dataService: DataService, private router: Router, private dep: FormBuilder) {
    //this.currentUser=this.dataService.currentUser;
    this.name=localStorage.getItem("name");
   }

  ngOnInit(): void {
  }
  Deposit() {
    
    if (this.depositForm.valid) {
      //console.log(typeof(parseInt(this.depositForm.value.deposit_user_amount)));
      this.dataService.deposit(this.depositForm.value.deposit_user_acc, this.depositForm.value.deposit_user_pwd,this.depositForm.value.deposit_user_amount)
      .subscribe((data:any) => {
        if (data) {
          alert(data.message);
          //this.router.navigateByUrl("");
        }
      }, (data) => {
        alert(data.error.message);

      });
    }
  }
  Withdraw() {
    this.dataService.withdraw(parseInt(this.withdrawForm.value.withdraw_user_acc), this.withdrawForm.value.withdraw_user_pwd, parseInt(this.withdrawForm.value.withdraw_user_amount))
    .subscribe((data:any) => {
      if (data) {
        alert(data.message);
        //this.router.navigateByUrl("");
      }
    }, (data) => {
      alert(data.console.error.message);

    });
  }
  Delete(){
    this.id=localStorage.getItem("accno");
  }
  onDelete($event:any)
  {
    alert("Account Deleted!!");
    this.id=null;
  }
  onCancel()
  {
    alert("Operation Cancelled!")
    this.id=null;
  }
}
