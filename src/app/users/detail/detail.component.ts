import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  title = 'Users Detail';
  height: any = 100;
  font: any;

  constructor() {}

  ngOnInit(): void {}
}
