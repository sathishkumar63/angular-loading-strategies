import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'angular-loading-strategies';
  navLinks = [
    { path: 'eager-loading', label: 'Eager Loading' },
    { path: 'lazy-loading', label: 'Lazy Loading' },
    { path: 'pre-loading', label: 'Pre Loading' }
  ];
}
