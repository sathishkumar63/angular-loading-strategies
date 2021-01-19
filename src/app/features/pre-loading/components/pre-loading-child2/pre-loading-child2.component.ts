import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-pre-loading-child2',
  templateUrl: './pre-loading-child2.component.html',
  styleUrls: ['./pre-loading-child2.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PreLoadingChild2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
