import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-lazy-loading-child1',
  templateUrl: './lazy-loading-child1.component.html',
  styleUrls: ['./lazy-loading-child1.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LazyLoadingChild1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
