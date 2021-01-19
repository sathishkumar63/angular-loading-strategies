import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-pre-loading-home',
  templateUrl: './pre-loading-home.component.html',
  styleUrls: ['./pre-loading-home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PreLoadingHomeComponent implements OnInit {
  navLinks = [
    { path: 'child1', label: 'Pre-Loading Child 1' },
    { path: 'child2', label: 'Pre-Loading Child 2' }
  ];
  constructor() {}

  ngOnInit(): void {}
}
