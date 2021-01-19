import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { Respuesta } from '@core/modelo/Respuesta';
import { Usuario } from '@core/modelo/usuario';
import { environment } from 'src/environments/environment';

@Injectable()
export class SeguridadService {

  private readonly PATH_BASE = 'usuarios';
  private readonly USER_SESSION_KEY = 'usuario';

  constructor(protected http: HttpService) {}

  public login(request: any) {
    return this.http.doPost<any, Respuesta<Usuario>>(`${environment.endpoint}${this.PATH_BASE}/login`, request,this.http.optsName('login'));
  }

  public guardarSesionUsuario(usuario: Usuario) {
    sessionStorage.setItem(this.USER_SESSION_KEY, JSON.stringify(usuario));
  }

  public obtenerUsuarioSession(): Usuario {
    return JSON.parse(sessionStorage.getItem(this.USER_SESSION_KEY));
  }

  public cerrarSesion() {
    sessionStorage.clear();
  }

  public estaAutenticado() {
    const usuario = sessionStorage.getItem(this.USER_SESSION_KEY);
    if(usuario) {
      return true;
    }
    return false;
  }
  
}
