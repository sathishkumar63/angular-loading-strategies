import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-eager-child1',
  templateUrl: './eager-child1.component.html',
  styleUrls: ['./eager-child1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EagerChild1Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
