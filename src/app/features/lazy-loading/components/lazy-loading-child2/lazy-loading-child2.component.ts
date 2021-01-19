import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-lazy-loading-child2',
  templateUrl: './lazy-loading-child2.component.html',
  styleUrls: ['./lazy-loading-child2.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LazyLoadingChild2Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
