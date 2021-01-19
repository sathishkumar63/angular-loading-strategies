import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-lazy-loading-home',
  templateUrl: './lazy-loading-home.component.html',
  styleUrls: ['./lazy-loading-home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LazyLoadingHomeComponent implements OnInit {
  navLinks = [
    { path: 'child1', label: 'Lazy Child 1' },
    { path: 'child2', label: 'Lazy Child 2' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
