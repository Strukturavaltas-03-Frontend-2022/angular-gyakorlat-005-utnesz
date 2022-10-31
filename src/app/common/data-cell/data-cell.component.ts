import { Component, Input, OnInit } from '@angular/core';
import { User } from '@angular/';
@Component({
  selector: 'app-data-cell',
  templateUrl: './data-cell.component.html',
  styleUrls: ['./data-cell.component.scss'],
})
export class DataCellComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input() data: User = new User();
  @Input() key: string = '';
}