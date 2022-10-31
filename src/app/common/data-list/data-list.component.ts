import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() dataRow: User = new User();

  @Output() selectClick: EventEmitter<boolean> = new EventEmitter;
  @Output() updateClcik: EventEmitter<boolean> = new EventEmitter;
  @Output() deleteClcik: EventEmitter<boolean> = new EventEmitter;

  OnSelectClicked(): void {
    this.selectClick.emit(dataRow);
  }

}
