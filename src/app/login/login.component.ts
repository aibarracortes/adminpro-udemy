import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../Models/usuario.model';
import { CredentialResponse, PromptMomentNotification } from 'google-one-tap';

declare function init_plugins(): void;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string;
  recuerdame: boolean = false;

  /* probando (inicio) */
  /* probando (fin) */

  constructor(
    public router: Router,
    public _usuarioService: UsuarioService
    ) {}

  ngOnInit() {
    init_plugins();

    /* Google sign-in (inicio) */
    // @ts-ignore
    window.onGoogleLibraryLoad = () => {
      // @ts-ignore
      google.accounts.id.initialize({
        client_id: "736610133866-28d15ltfkbb0tc1r5ro34if0f706nbpn.apps.googleusercontent.com",
        callback: this.handleCredentialResponse.bind(this),
        auto_select: false,
        cancel_on_tap_outside: true
      });
      // @ts-ignore
      google.accounts.id.renderButton(
      // @ts-ignore
      document.getElementById("btnGoogle"),
        { theme: "outline", size: "large", shape: "square", type: "icon", locale: "es" } 
      );
      // @ts-ignore
      google.accounts.id.prompt((notification: PromptMomentNotification) => {});
    };
    /* Google sign-in (fin) */

    this.email = localStorage.getItem('email') || '';
    if (this.email.length > 0) {
      this.recuerdame = true;
    }
  }

  // Gestiona el token de google obtenido con el login del botón de Google
  async handleCredentialResponse(response: CredentialResponse) {
    
    let token = response.credential;
    //console.log('token: ' + token);
    this._usuarioService.loginGoogle( token )
      .subscribe( () => this.router.navigate(['/dashboard']));

  }
  
  ingresar( forma: NgForm) {

    if (forma.invalid) {
      return;
    }

    let usuario = new Usuario(null, forma.value.email, forma.value.password);

    this._usuarioService.login(usuario, forma.value.recuerdame)
      .subscribe(correcto => this.router.navigate(['/dashboard']));

    // this.router.navigate(['/dashboard']);
  }
}
