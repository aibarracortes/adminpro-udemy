import { Component } from '@angular/core';

declare function init_plugins(): void;

@Component({
  selector: '',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent {

  constructor() {}

  ngOnInit() {
    init_plugins();
  }
  
}
