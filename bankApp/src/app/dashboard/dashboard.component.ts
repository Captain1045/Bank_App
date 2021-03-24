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
  constructor(private dataService: DataService, private router: Router, private dep: FormBuilder) {
    //this.currentUser=this.dataService.currentUser;
   }

  ngOnInit(): void {
  }
  Deposit() {
    if (this.depositForm.valid) {
      this.dataService.deposit(parseInt(this.depositForm.value.deposit_user_acc), this.depositForm.value.deposit_user_pwd,parseInt(this.depositForm.value.deposit_user_amount));
    }
  }
  Withdraw() {
    this.dataService.withdraw(parseInt(this.withdrawForm.value.withdraw_user_acc), this.withdrawForm.value.withdraw_user_pwd, parseInt(this.withdrawForm.value.withdraw_user_amount));
  }
}
