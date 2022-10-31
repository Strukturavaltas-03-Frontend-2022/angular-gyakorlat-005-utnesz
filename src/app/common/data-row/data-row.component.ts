import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { ɵEmptyOutletComponent } from '@angular/router';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-data-row',
  templateUrl: './data-row.component.html',
  styleUrls: ['./data-row.component.scss']
})
export class DataRowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
@Input() dataRow: User = new User();
@Output() selectClick: EventEmitter<User> = new EventEmitter();
@Output() updateClick: EventEmitter<User> = new EventEmitter();
@Output() deleteClick: EventEmitter<User> = new EventEmitter();


}

