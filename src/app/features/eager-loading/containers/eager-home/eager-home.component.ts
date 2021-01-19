import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eager-home',
  templateUrl: './eager-home.component.html',
  styleUrls: ['./eager-home.component.scss'],
})
export class EagerHomeComponent implements OnInit {
  navLinks = [
    { path: 'child1', label: 'Eager Child 1' },
    { path: 'child2', label: 'Eager Child 2' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
