import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-lazy-loading-home',
  templateUrl: './lazy-loading-home.component.html',
  styleUrls: ['./lazy-loading-home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LazyLoadingHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
