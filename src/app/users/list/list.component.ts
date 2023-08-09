import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  title = 'Users List';
  data = [
    {
      name: 'aimal',
      email: 'aimal@gmail.com',
    },
    {
      name: 'Shoaib',
      email: 'shoaib@gmail.com',
    },
    {
      name: 'asad',
      email: 'asad@gmail.com',
    },
    {
      name: 'hamza',
      email: 'hamza@gmail.com',
    },
    {
      name: 'akash',
      email: 'akash@gmail.com',
    },
    {
      name: 'hassan',
      email: 'hassan@gmail.com',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
