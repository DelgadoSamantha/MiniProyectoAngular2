import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { Usuarios } from '../home/home.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  us: Usuarios[]=[];

  constructor(private usuarioregistrado: UsuariosService) {

  }

  ngOnInit(): void {
    this.us=this.usuarioregistrado.getUsuarios();
    console.log(this.us);
  }

}
