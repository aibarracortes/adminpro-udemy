import { Component } from '@angular/core';
import { Router } from '@angular/router';

declare function init_plugins(): void;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public router: Router) {}

  ngOnInit() {
    init_plugins();
  }

  ingresar() {
    this.router.navigate(['/dashboard']);
  }
}
