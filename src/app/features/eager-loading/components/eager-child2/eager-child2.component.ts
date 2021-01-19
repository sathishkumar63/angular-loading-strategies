import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-eager-child2',
  templateUrl: './eager-child2.component.html',
  styleUrls: ['./eager-child2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EagerChild2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
