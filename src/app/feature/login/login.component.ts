import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '@core/modelo/usuario';
import { SeguridadService } from '@core/services/seguridad.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public correo;
  public contrasena;

  constructor(private seguridadService: SeguridadService, protected router: Router) { }

  ngOnInit() {}

  public login(): void {
    const request = {
      correo: this.correo,
      clave: this.contrasena
    }

    this.seguridadService.login(request).subscribe(response => this.manejarLoginExitoso(response.valor), () => this.manejarLoginError());
  }

  manejarLoginExitoso(usuario: Usuario) {
    this.seguridadService.guardarSesionUsuario(usuario);
    this.router.navigateByUrl('/home');
  }

  manejarLoginError() {
    alert('Fallo login');
  }
}
