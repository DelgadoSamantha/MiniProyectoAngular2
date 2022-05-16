import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usua!:Usuarios;

  constructor(private usuarioService: UsuariosService) { }

  ngOnInit(){
    this.usua = this.usuarioService.nuevoUsuario();
  
  }
  nuevoUsuario(): void {
    this.usuarioService.agregarUsuario(this.usua);
    this.usua = this.usuarioService.nuevoUsuario();
  }

}



export interface Usuarios{
 nombre:string;
 sexo:string;
 correo:string;
 fecha:String;
}