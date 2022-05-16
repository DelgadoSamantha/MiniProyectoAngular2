import { Injectable } from '@angular/core';
import { Usuarios } from './home/home.component';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private usuarios: Usuarios[]=[];
  

  constructor() { 
    this.usuarios=JSON.parse(localStorage.getItem("usuario") || '[]'  );
  }

  getUsuarios() {
    return this.usuarios;
  }

  
  agregarUsuario(usuario: Usuarios ) {
    this.usuarios.push(usuario);
    localStorage.setItem('usuario',JSON.stringify(this.usuarios));
  }

  nuevoUsuario(): Usuarios {
    return {
     nombre: '',
     sexo: '',
     correo: '',
     fecha: ''
    };
  }
  
  
  
}

