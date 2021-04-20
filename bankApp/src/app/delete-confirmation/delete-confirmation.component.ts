import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
//import * as EventEmitter from 'node:events';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.css']
})
export class DeleteConfirmationComponent implements OnInit {

  @Input()
  item!: string | symbol;
  @Output() onDelete = new EventEmitter();
  @Output() onCancel = new EventEmitter();
  constructor() { }
  
  ngOnInit(): void {
  }
  Confirm() {
    this.onDelete.emit(this.item);
    alert("deleting....");
  }
  Cancel() {
    this.onCancel.emit();
    alert("cancelling....");
  }
}
