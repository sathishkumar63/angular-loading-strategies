import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-pre-loading-child1',
  templateUrl: './pre-loading-child1.component.html',
  styleUrls: ['./pre-loading-child1.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PreLoadingChild1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
