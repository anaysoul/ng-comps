import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    { name: 'Soul', age: 33, job: 'Engineer', employed: true },
    { name: 'Jill', age: 32, job: 'Designer', employed: true },
    { name: 'Elyse', age: 25, job: 'Engineer', employed: false },
  ];
  headers = [
    { key: 'employed', label: 'Has a job?' },
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
