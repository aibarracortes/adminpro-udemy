import { Component } from '@angular/core';
import { SidebarService, UsuarioService } from 'src/app/services/service.index';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {

  constructor(
    public _sidebar: SidebarService,
    public _usuarioService: UsuarioService
  ) {}
}
